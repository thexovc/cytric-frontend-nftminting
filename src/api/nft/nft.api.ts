import { apiClient } from "@/utils/axios.utils";

export const storeNFTMetadata = async (formdata: StoreMetadataRequest) => {
  // console.log({ formdata });

  return apiClient({
    url: "/nft",
    method: "post",
    data: formdata,
  });
};

export const getUserGallery = (params: GetGalleryParams) => {
  return apiClient({
    url: `/nft/gallery/${params.userWalletAddress}`,
    method: "get",
    params,
  });
};
