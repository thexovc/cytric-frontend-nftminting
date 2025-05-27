import { apiClient } from "@/utils/axios.utils";

export const storeNFTMetadata = async (formdata: StoreMetadataRequest) => {
  console.log({ formdata });

  return apiClient({
    url: "/nft",
    method: "post",
    data: formdata,
  });
};
