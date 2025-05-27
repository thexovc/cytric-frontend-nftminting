'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import assets from '../../../public/assets';
import Image from 'next/image';
import MintSuccess from '../shared/MintSuccess';
import { useMintNFTHandler } from '@/hooks/useMintNFT';
import { useAccount } from 'wagmi';
import toast from 'react-hot-toast';

interface MintFormData {
    name: string;
    description: string;
    logoUrl: string;
}

// Validation schema using Yup
const validationSchema = yup.object({
    name: yup
        .string()
        .required('NFT name is required')
        .min(3, 'NFT name must be at least 3 characters')
        .max(50, 'NFT name must not exceed 50 characters'),
    description: yup
        .string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description must not exceed 500 characters'),
    logoUrl: yup
        .string()
        .required('Image URL is required')
});

export default function MintForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { isConnected, address } = useAccount();

    const [mintedNFT, setMintedNFT] = useState<{
        tokenId: number;
        hash: `0x${string}`;
        name: string;
        description: string;
        image: string;
        metadataUrl: string;
        contractAddress: string
    } | null>(null);

    // Initialize React Hook Form with Yup validation
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<MintFormData>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange', // Validate on change for better UX
        defaultValues: {
            name: '',
            description: '',
            logoUrl: ''
        }
    });

    const { mintNFT } = useMintNFTHandler();

    const onSubmit = async (data: MintFormData) => {
        setIsLoading(true);

        if (!isConnected) {
            toast.error("connect wallet to continue");
            setIsLoading(false)
            return
        }

        try {
            // TODO: Implement actual minting logic here
            console.log('Minting NFT with data:', data);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Create mock NFT data for success modal
            const mockNFTData = {
                name: data.name,
                description: data.description,
                image: data.logoUrl,
                userWalletAddress: String(address)
            };

            const receipt = await mintNFT(mockNFTData);
            console.log('NFT Minted:', receipt);

            setMintedNFT({ ...receipt, contractAddress: `${process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS}` });
            setShowSuccessModal(true);

            // Reset form after successful mint
            reset();
        } catch (error) {
            console.error('Error minting NFT:', error);
            toast.error('Error minting NFT. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (mintedNFT) {
        return (
            <MintSuccess
                nftData={mintedNFT}
                onMintAnother={() => {
                    setMintedNFT(null);
                }}
            />
        )
    }
    return (
        <div className="w-[90%] max-w-lg mx-auto">
            <div className="bg-[#11182780] backdrop-blur-sm border border-[#1F2937] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Mint Your NFT
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* NFT Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                            NFT Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            placeholder="Enter NFT name"
                            className={`w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-lg text-white placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register('description')}
                            placeholder="Describe your NFT"
                            rows={4}
                            className={`w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-lg text-white placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none`}
                        />
                        {
                            errors.description && (
                                <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
                            )
                        }
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="logoUrl" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="logoUrl"
                            {...register('logoUrl')}
                            placeholder="Enter image URL"
                            className={`w-full px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-lg text-white placeholder-[#ADAEBC] focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
                        />
                        {errors.logoUrl && (
                            <p className="mt-1 text-sm text-red-400">{errors.logoUrl.message}</p>
                        )}
                    </div>

                    {/* Mint Button */}
                    <button
                        type="submit"
                        disabled={isLoading || !isValid}
                        className="w-full cursor-pointer bg-gradient-to-r from-primary-pink to-primary-purple disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg hover:scale-[102%] disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                Minting...
                            </>
                        ) : (
                            <>
                                <Image src={assets.whitcube} alt="logo" width={20} height={20} color='white' />
                                Mint NFT
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
