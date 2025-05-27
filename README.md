# Cytric NFT Minting Frontend

A modern web application for minting and managing NFTs, built with Next.js and Tailwind CSS.

## Live Demo

- Frontend: [https://daniel-cytric-nft-frontend.up.railway.app/](https://daniel-cytric-nft-frontend.up.railway.app/)
- Backend API: [https://daniel-cytric-api.up.railway.app/](https://daniel-cytric-api.up.railway.app/)

## Backend Repository

The backend code for this project can be found here: [cytric-nftminiting-backend](https://github.com/thexovc/cytric-nftminiting-backend)

## API Routes

### NFT Endpoints

#### Store NFT Data

- **POST** `/nft`
- **Description**: Store new NFT data
- **Authentication**: Required (API Key)
- **Request Body**:
  ```json
  {
    "nftId": number,
    "name": string,
    "description": string,
    "image": string,
    "userWalletAddress": string
  }
  ```
- **Responses**:
  - 201: NFT successfully created
  - 400: NFT ID already exists
  - 401: Unauthorized - Invalid or missing API key
  - 500: Internal server error

#### Get NFT by ID

- **GET** `/nft/getById/:nftId`
- **Description**: Retrieve NFT data by ID
- **Parameters**:
  - `nftId`: The ID of the NFT
- **Responses**:
  - 200: NFT data retrieved successfully
  - 404: NFT not found
  - 401: Unauthorized - Invalid or missing API key

#### Get User Gallery

- **GET** `/nft/gallery/:userWalletAddress`
- **Description**: Get NFT gallery for a user wallet address
- **Authentication**: Required (API Key)
- **Parameters**:
  - `userWalletAddress`: The wallet address of the user
- **Responses**:
  - 200: NFT gallery retrieved successfully
  - 404: No NFTs found for the user wallet address
  - 401: Unauthorized - Invalid or missing API key


## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_MINT_CONTRACT_ADDRESS=your_contract_address
   NEXT_PUBLIC_BACKEND_API_KEY=your_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Video Walkthroughs

- App Demo: [App Overview](https://www.loom.com/share/5fb3270a11c24213b62259da6252e003?sid=36ccdf72-4149-41fb-a1b6-cf927351173f)
- Frontend Codebase Walkthrough: [Frontend Overview](https://www.loom.com/share/a77533cf1d444b9d9405251635bd3395?sid=51180dd2-cb10-47c0-a3fe-c2029ba4cb84)
- Backend Codebase Walkthrough: [Backend Overview](https://www.loom.com/share/f29372f62f4d4f008528770ada3b9d7f?sid=75ec5631-2e05-41ce-add9-cb6c4abe562a)

## Environment Variables

The following environment variables are required to run the application:

```env
# Smart Contract
NEXT_PUBLIC_MINT_CONTRACT_ADDRESS=your_contract_address

# Backend API
NEXT_PUBLIC_BACKEND_API_KEY=your_api_key

# Optional Environment Variables
NEXT_PUBLIC_NETWORK_ID=your_network_id
NEXT_PUBLIC_RPC_URL=your_rpc_url
```

## Project Structure

