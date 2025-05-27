import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import abi from "./NFT_ABI.json";

export const MINT_CONTRACT_ADDRESS = `${process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS}`;

export const mintingABI = abi;

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});
