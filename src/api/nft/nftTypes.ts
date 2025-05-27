interface StoreMetadataRequest {
  nftId?: number;
  name: string;
  description: string;
  image: string;
  userWalletAddress: string;
}

interface StoreMetadataResponse {
  id: number;
  nftId: number;
  name: string;
  description: string;
  image: string;
  metadataUrl: string;
}

interface GetGalleryResponse {
  id: number;
  nftId: number;
  name: string;
  description: string;
  image: string;
  metadataUrl: string;
  userWalletAddress: string;
}

interface GetGalleryParams {
  userWalletAddress: string;
}
