# Cytric NFT Minting Frontend

A modern web application for minting and managing NFTs, built with Next.js and Tailwind CSS.

## Live Demo

- Frontend: [https://cytric-frontend-nftminting.vercel.app/](https://cytric-frontend-nftminting.vercel.app/)
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

## Features

- Connect wallet functionality
- NFT minting with metadata
- User gallery view
- Responsive design
- Real-time transaction status updates
- Success notifications

## Tech Stack

- Next.js
- Tailwind CSS
- Wagmi (Web3)
- React Query
- TypeScript
- React Hook Form
- Yup Validation

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

## Project Structure

```
src/
├── api/          # API integration
├── components/   # React components
├── hooks/        # Custom hooks
├── lib/          # Utility functions
└── utils/        # Helper functions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
