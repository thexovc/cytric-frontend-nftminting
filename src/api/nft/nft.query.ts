import { useMutation } from "@tanstack/react-query";
import { storeNFTMetadata } from "./nft.api";
import { AxiosError, AxiosResponse } from "axios";

export const useStoreNFTMetadata = (
  onError: (error: AxiosError) => void,
  onSuccess: (data: AxiosResponse<StoreMetadataResponse>) => void
) => {
  return useMutation<
    AxiosResponse<StoreMetadataResponse>,
    AxiosError,
    StoreMetadataRequest
  >({
    mutationFn: storeNFTMetadata,
    onError,
    onSuccess,
  });
};
