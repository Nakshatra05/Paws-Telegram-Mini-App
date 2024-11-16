// icons/ArrowBigRight.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import { IconProps } from "../utils/types";

const ArrowBigRight: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={svgSize} width={svgSize} viewBox="0 0 20 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 10.25C3 9.83579 3.33579 9.5 3.75 9.5L14.3879 9.5L10.2302 5.54062C9.93159 5.25353 9.92228 4.77875 10.2094 4.48017C10.4965 4.18159 10.9713 4.17228 11.2698 4.45937L16.7698 9.70937C16.9169 9.85078 17 10.046 17 10.25C17 10.454 16.9169 10.6492 16.7698 10.7906L11.2698 16.0406C10.9713 16.3277 10.4965 16.3184 10.2094 16.0198C9.92228 15.7213 9.93159 15.2465 10.2302 14.9594L14.3879 11L3.75 11C3.33579 11 3 10.6642 3 10.25Z" fill="currentColor" />
        </svg>
    );
};

export default ArrowBigRight;