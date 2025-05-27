import { useReadContract, useWriteContract } from "wagmi";
import { mintingABI, MINT_CONTRACT_ADDRESS } from "./config";

export function useCheckTokenId(tokenId: number) {
  return useReadContract({
    address: `${MINT_CONTRACT_ADDRESS}` as any,
    abi: mintingABI,
    functionName: "checkId",
    args: [BigInt(tokenId)],
  });
}

export function useMintNFT() {
  return useWriteContract();
}
