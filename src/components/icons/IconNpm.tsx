import React from "react";

interface IconProps {
  size?: number | string;
}

export const IconNpm: React.FC<IconProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <polygon fill="#C12127" points="0 256 0 0 256 0 256 256" />
      <polygon
        fill="#FFFFFF"
        points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"
      />
    </g>
  </svg>
);
