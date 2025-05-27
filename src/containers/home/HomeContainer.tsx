'use client';

import HeroSection from '@/components/home/HeroSection';
import MintForm from '@/components/home/MintForm';
import NFTGallery from '@/components/home/NFTGallery';
import Header from '@/components/shared/Header';
import React from 'react';

const HomeContainer: React.FC = () => {
    return (
        <div className="min-h-screen text-white">
            <Header />
            <div className="min-h-screen pb-20 bg-gradient-to-br from-[#000000] via-[#111827] to-[#111827] relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900"></div>

                <HeroSection />
                <MintForm />
                <NFTGallery />
            </div>
        </div>
    );
};

export default HomeContainer;