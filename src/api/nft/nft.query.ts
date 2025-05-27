import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserGallery, storeNFTMetadata } from "./nft.api";
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

export const useGetUserGallery = (params: GetGalleryParams) => {
  return useQuery({
    queryKey: ["userGallery", params.userWalletAddress],
    queryFn: async () => {
      const response = await getUserGallery(params);
      return response?.data?.data as GetGalleryResponse[];
    },
  });
};
