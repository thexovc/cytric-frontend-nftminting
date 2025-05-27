import React from 'react';
import assets from "../../../public/assets";
import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from './ConnectWalletButton';


const Header: React.FC = () => {
    return (
        <header className="bg-black/80 p-4 ">
            <div className='container mx-auto flex justify-between items-center'>
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
