import React from 'react';
import Image from 'next/image';
import assets from '../../../public/assets';
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast';

interface MintSuccessProps {
    nftData: {
        tokenId: number;
        hash: `0x${string}`;
        name: string;
        description: string;
        image: string;
        metadataUrl: string;
        contractAddress: string
    };
    onMintAnother: () => void;
}

export default function MintSuccess({
    nftData,
    onMintAnother,
}: MintSuccessProps) {
    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const success = copy(`${process.env.NEXT_PUBLIC_API_BASE_URL}/nft/getById/${nftData.tokenId}`);
        if (success) {
            toast.success('Link copied to clipboard!');
        } else {
            toast.error('Failed to copy link.');
        }
    }

    const handleMintAnother = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onMintAnother();
    }

    return (
        <div className="w-[90%] max-w-lg mx-auto">
            <div className="bg-[#11182780] backdrop-blur-sm border border-[#1F2937] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-6">
                    {/* Success Icon */}
                    <div className="w-12 h-12 bg-[#0D9488]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image
                            src={assets.check}
                            alt="Success"
                            width={24}
                            height={24}
                            className="w-6 h-6 text-[#10B981]"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-[#10B981] mb-2">
                        NFT Minted Successfully!
                    </h2>
                    <p className="text-[#9CA3AF]">
                        Your NFT has been created and added to your collection
                    </p>
                </div>

                {/* NFT Preview */}
                <div className="mb-6">
                    <div className="bg-gradient-to-r from-primary-purple to-primary-pink rounded-lg overflow-hidden mb-4">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={nftData.image}
                                alt={nftData.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                    </div>

                    {/* NFT Details */}
                    <div className="space-y-3">
                        <div>
                            <label className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                                NFT Name
                            </label>
                            <p className="text-white text-lg font-semibold">
                                {nftData.name}
                            </p>
                        </div>

                        <div>
                            <label className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                                Description
                            </label>
                            <p className="text-[#D1D5DB] text-lg">
                                {nftData.description}
                            </p>
                        </div>

                        <div>
                            <label className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                                NFT ID
                            </label>
                            <p className="text-[#8B5CF6] text-lg font-mono">
                                #{nftData.tokenId}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={handleCopy}
                        type="button"
                        className="text-sm flex-1 bg-[#1E293B] hover:bg-[#334155] text-white py-3 px-2 md:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <Image
                            src={assets.share}
                            alt="Share"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        Share
                    </button>

                    <button
                        onClick={handleMintAnother}
                        type="button"
                        className="text-sm flex-1 bg-gradient-to-r from-primary-purple to-primary-pink text-white py-3 px-2 md:px-4 rounded-lg flex items-center justify-center gap-1 font-semibold"
                    >
                        <Image
                            src={assets.whitcube}
                            alt="Mint Another"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span>Mint Another</span>
                    </button>
                </div>
            </div>
        </div>
    );
}



