'use client';
import React from 'react';
import Image from 'next/image';
import assets from '../../../public/assets';

export default function HeroSection() {
    return (
        <div className="relative z-10 container mx-auto px-4 py-10">
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-20">
                {/* Hero content - centered */}
                <div className="text-center space-y-8 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Discover & Collect{' '}
                        <span>
                            Extraordinary NFTs
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Enter the world of digital art and collectibles. Explore unique NFTs created by artists worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">


                        {/* Watch Demo Button */}
                        <button className="cursor-pointer bg-gradient-to-r from-primary-pink to-primary-purple text-white hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                            <Image src={assets.rocket} alt="rocket" width={20} height={20} />
                            Start Creating
                        </button>

                        <button className="cursor-pointer border-1 border-[#374151] hover:border-white text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                            <Image src={assets.play} alt="play" width={20} height={20} />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
