'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import React from 'react';

const config = getDefaultConfig({
    appName: 'Nft-Minting',
    projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    chains: [sepolia, mainnet],
    ssr: true,
});

const queryClient = new QueryClient();

const DappProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default DappProvider; 