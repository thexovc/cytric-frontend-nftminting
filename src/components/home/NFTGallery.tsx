'use client';
import React from 'react';
import { useGetUserGallery } from '@/api/nft/nft.query';
import { useAccount } from 'wagmi';
import NFTCard from '../shared/NFTCard';
import assets from '../../../public/assets';
import Image from 'next/image';

const nftImages = [assets.nft1, assets.nft2, assets.nft3];

const getRandomImage = () => {
    return nftImages[Math.floor(Math.random() * nftImages.length)];
};

export default function NFTGallery() {
    const { address } = useAccount();

    const { data: nfts, isLoading, error } = useGetUserGallery({
        userWalletAddress: address || '',
    });

    if (!address) {
        return (
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text">
                            Your NFT Gallery
                        </h2>
                        <div className="max-w-md mx-auto p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                            <Image
                                src={assets.wallet}
                                alt="Connect Wallet"
                                className="w-16 h-16 mx-auto mb-4 opacity-75"
                            />
                            <p className="text-gray-300 text-lg">
                                Connect your wallet to view your NFTs
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (isLoading) {
        return (
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-left mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text">
                            Your NFT Gallery
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-800/50 rounded-xl h-64 mb-4"></div>
                                <div className="h-6 bg-gray-800/50 rounded-lg w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-800/50 rounded-lg w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text">
                            Your NFT Gallery
                        </h2>
                        <div className="max-w-md mx-auto p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-red-500/50">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <p className="text-red-400 text-lg">
                                Error loading your NFTs. Please try again later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!nfts || nfts.length === 0) {
        return (
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text">
                            Your NFT Gallery
                        </h2>
                        <div className="max-w-md mx-auto p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                            <Image
                                src={assets.nft1}
                                alt="No NFTs"
                                className="w-24 h-24 mx-auto mb-4 opacity-50"
                            />
                            <p className="text-gray-300 text-lg">
                                No NFTs found, please mint your first one using the widget above
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-left mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text">
                        Your NFT Gallery
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {nfts.map((nft) => (
                        <NFTCard
                            key={nft.nftId}
                            id={nft.nftId.toString()}
                            title={nft.name}
                            description={nft.description}
                            imageUrl={nft.image || getRandomImage()}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
