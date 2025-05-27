import { useState } from "react";
import { useWriteContract } from "wagmi";
import {
  publicClient,
  mintingABI,
  MINT_CONTRACT_ADDRESS,
} from "@/lib/contracts/config";
import { generateTokenId } from "@/utils/nft";
import { AxiosError } from "axios";
import { useStoreNFTMetadata } from "@/api/nft/nft.query";

export function useMintNFTHandler() {
  const [hash, setHash] = useState<`0x${string}` | undefined>();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { writeContractAsync } = useWriteContract();

  const {
    mutateAsync: storeMetadata,
    isPending: isStoring,
    isError: storeMetadataError,
  } = useStoreNFTMetadata(
    (error: AxiosError) => {
      console.error("Metadata storage failed:", error);
    },
    (data) => {
      console.log("Metadata stored:", data.data);
    }
  );

  const mintNFT = async (metadata: StoreMetadataRequest) => {
    setError(null);
    setIsConfirming(true);
    setIsConfirmed(false);

    try {
      // 1. Generate unique token ID
      let tokenId = generateTokenId();
      let exists = await publicClient.readContract({
        address: MINT_CONTRACT_ADDRESS,
        abi: mintingABI,
        functionName: "checkId",
        args: [BigInt(tokenId)],
      });

      while (exists) {
        tokenId = generateTokenId();
        exists = await publicClient.readContract({
          address: MINT_CONTRACT_ADDRESS,
          abi: mintingABI,
          functionName: "checkId",
          args: [BigInt(tokenId)],
        });
      }

      // 2. Use temporary metadata URL
      const placeholderUrl = `https://yourdomain.com/metadata/${tokenId}?status=pending`;

      // 3. Mint NFT on-chain
      const txHash = await writeContractAsync({
        address: MINT_CONTRACT_ADDRESS,
        abi: mintingABI,
        functionName: "mint",
        args: [BigInt(tokenId), placeholderUrl],
      });

      setHash(txHash);

      // 4. Wait for transaction confirmation
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (receipt.status !== "success") throw new Error("Minting failed");

      setIsConfirmed(true);

      // 5. Store metadata in backend
      const response = await storeMetadata({
        name: metadata.name,
        description: metadata.description,
        logoUrl: metadata.logoUrl,
        userWalletAddress: metadata.userWalletAddress,
      });

      return {
        tokenId,
        hash: txHash,
        name: metadata.name,
        description: metadata.description,
        imageUrl: metadata.logoUrl,
        metadataUrl: response.data.metadataUrl,
      };
    } catch (err: any) {
      setError(err.message || "Unexpected error");
      throw err;
    } finally {
      setIsConfirming(false);
    }
  };

  return {
    mintNFT,
    loading: isConfirming || isStoring,
    isConfirmed,
    error: error || (storeMetadataError ? "Metadata store failed" : null),
    hash,
  };
}
