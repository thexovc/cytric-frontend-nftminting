import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface NFTCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: StaticImageData;
    creator?: string;
    price?: number;
    className?: string;
}

export default function NFTCard({
    id,
    title,
    description,
    imageUrl,
    creator,
    price,
    className = ""
}: NFTCardProps) {
    return (
        <div className={`group relative backdrop-blur-sm border border-[#1F2937] rounded-xl overflow-hidden hover:scale-[1.02] ${className}`}>
            {/* NFT Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* NFT Details */}
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-white transition-colors duration-200 truncate">
                    {title}
                </h3>

                <p className="text-[#9CA3AF] text-sm line-clamp-2 leading-relaxed">
                    {description}
                </p>

            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r opacity-0" />
        </div>
    );
}
