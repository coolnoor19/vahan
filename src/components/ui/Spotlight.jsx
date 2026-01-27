import React from "react";
import { cn } from "../../lib/utils";

export const Spotlight = ({
    className,
    fill = "white",
}) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter0_f_29_215)">
                <path
                    fill={fill}
                    fillOpacity="0.21"
                    d="M3089.3 2269.8L-9 3500.5L-434 2900L-585 1785.4L3089.3 2269.8Z"
                />
                <path
                    fill={fill}
                    fillOpacity="0.21"
                    d="M-585 1785.4L-101.442 3447.88L-409.682 1785.4H-585Z"
                />
                <path
                    fill={fill}
                    fillOpacity="0.21"
                    d="M-585 1785.4L3089.3 2269.8L2193.3 2056.1L-585 1785.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L723.2 2673L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L1200.74 3450.5L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L2622.5 1785.4L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L3750.5 2842L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L3826.5 2420L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L3452.5 2056.1L1726.5 1744.4Z"
                />
                <path
                    fillOpacity="0.21"
                    fill={fill}
                    d="M1726.5 1744.4L3089.3 2269.8L1473 3500.5L1726.5 1744.4Z"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_29_215"
                    x="-859"
                    y="-139"
                    width="5411"
                    height="4539"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_29_215"
                    />
                </filter>
            </defs>
        </svg>
    );
};
