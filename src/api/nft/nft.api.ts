import { API_BASE_URL, apiClient } from "@/utils/axios.utils";
import axios from "axios";

export const storeNFTMetadata = async (formdata: StoreMetadataRequest) => {
  return apiClient({
    url: "/nft",
    method: "post",
    data: formdata,
  });
};
