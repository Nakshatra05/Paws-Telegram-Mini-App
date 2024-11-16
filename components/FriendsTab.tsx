// components/FriendsTab.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

'use client'

import { paws } from '@/images'
import Image from 'next/image'

const FriendsTab = () => {
    return (
        <div className={`friends-tab-con px-4 pb-24 transition-all duration-300`}>
            {/* Header Text */}
            <div className="pt-8 space-y-1">
                <h1 className="text-3xl font-bold">INVITE FRIENDS</h1>
                <div className="text-xl">
                    <span className="font-semibold">SHARE</span>
                    <span className="ml-2 text-gray-500">YOUR INVITATION</span>
                </div>
                <div className="text-xl">
                    <span className="text-gray-500">LINK &</span>
                    <span className="ml-2 font-semibold">GET 10%</span>
                    <span className="ml-2 text-gray-500">OF</span>
                </div>
                <div className="text-gray-500 text-xl">
                    FRIEND'S POINTS
                </div>
            </div>

            {/* Empty State */}
            <div className="mt-8 mb-2">
                <div className="bg-[#151516] w-full rounded-2xl p-8 flex flex-col items-center">
                    <Image
                        src={paws}
                        alt="Paws"
                        width={171}
                        height={132}
                        className="mb-4"
                    />
                    <p className="text-xl text-[#8e8e93] text-center">
                        There is nothing else.<br />
                        Invite to get more rewards.
                    </p>
                </div>
            </div>

            {/* Fixed Invite Button */}
            <div className="fixed bottom-[80px] left-0 right-0 py-4 flex justify-center">
                <div className="w-full max-w-md px-4">
                    <button className="w-full bg-[#4c9ce2] text-white py-4 rounded-xl text-lg font-medium">
                        Invite
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FriendsTab