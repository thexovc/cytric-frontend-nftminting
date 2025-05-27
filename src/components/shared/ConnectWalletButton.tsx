import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import assets from "../../../public/assets"
import Image from 'next/image';

export const ConnectWalletButton: React.FC = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="px-4 py-2 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2"
                                    >
                                        <Image
                                            src={assets.wallet}
                                            alt="Wallet Icon"
                                            width={20}
                                            height={20}
                                            priority
                                        />
                                        Connect Wallet
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:opacity-90 transition-opacity"
                                    >
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div className='flex items-center gap-3'>
                                    <button
                                        onClick={openChainModal}
                                        className='flex items-center text-gray-300 hover:text-white transition-colors'
                                        type="button"
                                    >
                                        {chain.hasIcon && chain.iconUrl && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                <img
                                                    alt={chain.name ?? 'Chain icon'}
                                                    src={chain.iconUrl}
                                                    style={{ width: 12, height: 12 }}
                                                />
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                        className="cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
                                    >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}; 