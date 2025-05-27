'use client';
import React from 'react';
import Image from 'next/image';
import NFTCard from '../shared/NFTCard';
import assets from '../../../public/assets';

const nftImages = [assets.nft1, assets.nft2, assets.nft3];

const getRandomImage = () => {
    return nftImages[Math.floor(Math.random() * nftImages.length)];
};

// Sample NFT data
const sampleNFTs = [
    {
        id: '1',
        title: 'Cosmic Dreams #001',
        description: 'A journey through digital dimensions',
        creator: 'ArtistDAO',
        price: 2.5
    },
    {
        id: '2',
        title: 'Neo Genesis #002',
        description: 'Digital evolution manifested',
        creator: 'CyberVision',
        price: 1.8
    },
    {
        id: '3',
        title: 'Digital Horizon #003',
        description: 'Where reality meets digital art',
        creator: 'PixelMaster',
        price: 3.2
    },
    {
        id: '4',
        title: 'Quantum Realm #004',
        description: 'Exploring the infinite possibilities',
        creator: 'QuantumArt',
        price: 4.1
    },
    {
        id: '5',
        title: 'Ethereal Waves #005',
        description: 'Flowing through digital space',
        creator: 'WaveForm',
        price: 2.9
    },
    {
        id: '6',
        title: 'Neon Dreams #006',
        description: 'Vibrant colors in digital harmony',
        creator: 'NeonStudio',
        price: 1.5
    }
].map((nft) => ({ ...nft, imageUrl: getRandomImage() }));

export default function NFTGallery() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Your NFT Gallery
                    </h2>

                </div>

                {/* NFT Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {sampleNFTs.map((nft) => (
                        <NFTCard
                            key={nft.id}
                            id={nft.id}
                            title={nft.title}
                            description={nft.description}
                            imageUrl={nft.imageUrl}
                            creator={nft.creator}
                            price={nft.price}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}
