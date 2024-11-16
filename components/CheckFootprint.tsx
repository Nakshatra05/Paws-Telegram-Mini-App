// components/CheckFootprint.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

'use client'

import ArrowBigRight from "@/icons/ArrowBigRight"

const CheckFootprint = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="fixed top-0 w-full max-w-md px-4 py-3 bg-[#151516] cursor-pointer">
                <div className="flex justify-between items-center pl-2 border-l-[2px] border-[#4c9ce2]">
                    <div className="text-base text-white font-medium">Check the footprint map</div>
                    <button className="bg-[#4c9ce2] rounded-full px-2 py-1">
                        <ArrowBigRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckFootprint