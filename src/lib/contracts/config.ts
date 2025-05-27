import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import abi from "./NFT_ABI.json";

export const MINT_CONTRACT_ADDRESS =
  "0x743f49311a82fe72eb474c44e78da2a6e0ae951c";

export const mintingABI = abi;

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});
