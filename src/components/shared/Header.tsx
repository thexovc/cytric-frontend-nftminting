import React from 'react';
import assets from "../../../public/assets";
import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from './ConnectWalletButton';


const Header: React.FC = () => {
    return (
        <header className="bg-black/80 py-4 border-b border-[#1F2937]">
            <div className='container w-[95%] md:max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo */}
                <Link href={"/"} className="flex items-center">
                    <Image
                        alt="logo"
                        src={assets.logo}
                        className="cursor-pointer w-8"
                    />
                </Link>

                {/* Connect Wallet Button */}
                <ConnectWalletButton />
            </div>
        </header>
    );
};

export default Header;
