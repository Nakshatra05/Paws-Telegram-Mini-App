// icons/TaskTelegram.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import { IconProps } from "../utils/types";

const TaskTelegram: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={svgSize} width={svgSize} viewBox="0 0 40 40" fill="none">
            <rect height="40" width="40" rx="10" fill="#7C7C7C" />
            <rect height="40" width="40" rx="10" fill="#3096EF" />
            <path d="M27.7101 12.6545C27.7101 12.6545 29.6526 11.897 29.4901 13.7365C29.4366 14.494 28.9511 17.1455 28.5731 20.013L27.2781 28.508C27.2781 28.508 27.1701 29.7525 26.1986 29.969C25.2276 30.185 23.7706 29.2115 23.5006 28.995C23.2846 28.8325 19.4536 26.3975 18.1046 25.2075C17.7266 24.8825 17.2946 24.2335 18.1586 23.476L23.8246 18.065C24.4721 17.415 25.1196 15.9 22.4216 17.74L14.8666 22.88C14.8666 22.88 14.0031 23.4215 12.3846 22.9345L8.87665 21.852C8.87665 21.852 7.58165 21.0405 9.79415 20.229C15.1906 17.686 21.8281 15.089 27.7096 12.654" fill="white" />
        </svg>
    );
};

export default TaskTelegram;