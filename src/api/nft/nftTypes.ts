interface StoreMetadataRequest {
  name: string;
  description: string;
  logoUrl: string;
  userWalletAddress: string;
}

interface StoreMetadataResponse {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  metadataUrl: string;
}
