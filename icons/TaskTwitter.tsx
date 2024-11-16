// icons/TaskTwitter.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import { IconProps } from "../utils/types";

const TaskTwitter: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={svgSize} width={svgSize} viewBox="0 0 40 40" fill="none">
            <rect height="40" width="40" rx="10" fill="#2B2B2B" />
            <path d="M18.488 22.651L23.25 29H30.25L22.392 18.522L28.93 11H26.28L21.163 16.886L16.75 11H9.75L17.26 21.015L10.32 29H12.97L18.488 22.651ZM24.25 27L13.75 13H15.75L26.25 27H24.25Z" fill="white" />
        </svg>
    );
};

export default TaskTwitter;