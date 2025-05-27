import React from 'react';
import Image from 'next/image';

interface MintSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    nftData: {
        name: string;
        description: string;
        imageUrl: string;
        nftId: string;
        contractAddress?: string;
    };
    onMintAnother: () => void;
    onShare?: () => void;
}

export default function MintSuccessModal({ 
    isOpen, 
    onClose, 
    nftData, 
    onMintAnother, 
    onShare 
}: MintSuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full mx-auto overflow-hidden">
                {/* Header */}
                <div className="p-6 text-center border-b border-gray-700">
                    {/* Success Icon */}
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                            className="w-8 h-8 text-green-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-green-400 mb-2">
                        NFT Minted Successfully!
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Your NFT has been created and added to your collection
                    </p>
                </div>

                {/* NFT Preview */}
                <div className="p-6">
                    <div className="bg-gray-800/50 rounded-xl overflow-hidden mb-4">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={nftData.imageUrl}
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
                            <label className="text-xs text-gray-500 uppercase tracking-wide">
                                NFT Name
                            </label>
                            <p className="text-white font-semibold">
                                {nftData.name}
                            </p>
                        </div>

                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wide">
                                Description
                            </label>
                            <p className="text-gray-300 text-sm">
                                {nftData.description}
                            </p>
                        </div>

                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wide">
                                NFT ID
                            </label>
                            <p className="text-blue-400 font-mono text-sm">
                                #{nftData.nftId}
                            </p>
                        </div>

                        {nftData.contractAddress && (
                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wide">
                                    Contract
                                </label>
                                <p className="text-blue-400 font-mono text-xs break-all">
                                    {nftData.contractAddress}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 border-t border-gray-700 flex gap-3">
                    {onShare && (
                        <button
                            onClick={onShare}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" 
                                />
                            </svg>
                            Share
                        </button>
                    )}

                    <button
                        onClick={onMintAnother}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
                    >
                        <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                            />
                        </svg>
                        Mint Another
                    </button>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
