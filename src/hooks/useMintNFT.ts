import { useState } from "react";
import { useWriteContract } from "wagmi";
import {
  publicClient,
  mintingABI,
  MINT_CONTRACT_ADDRESS,
} from "@/lib/contracts/config";
import { generateTokenId, storeMetadata } from "@/utils/nft";

export function useMintNFTHandler() {
  const [hash, setHash] = useState<`0x${string}` | undefined>();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { writeContractAsync } = useWriteContract();

  const mintNFT = async (metadata: {
    name: string;
    description: string;
    logoUrl: string;
  }) => {
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

      // 2. Use temporary metadata URL (can be placeholder or static JSON endpoint)
      const placeholderUrl = `https://yourdomain.com/metadata/${tokenId}?status=pending`;

      // 3. Mint NFT
      const txHash = await writeContractAsync({
        address: MINT_CONTRACT_ADDRESS,
        abi: mintingABI,
        functionName: "mint",
        args: [BigInt(tokenId), placeholderUrl],
      });

      setHash(txHash);

      // 4. Wait for transaction to be mined
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (receipt.status !== "success") throw new Error("Minting failed");

      setIsConfirmed(true);

      // 5. Store metadata in your backend
      const { metadataUrl } = await storeMetadata({
        name: metadata.name,
        description: metadata.description,
        logoUrl: metadata.logoUrl,
      });

      // Optional: Tell backend to update metadata if needed
      // Or add support to your contract to update it later if it's mutable

      return {
        tokenId,
        hash: txHash,
        name: metadata.name,
        description: metadata.description,
        imageUrl: metadata.logoUrl,
        metadataUrl,
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
    loading: isConfirming,
    isConfirmed,
    error,
    hash,
  };
}
