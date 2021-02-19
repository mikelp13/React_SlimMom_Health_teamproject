import React from 'react';

const IconBack = ({
    style = {},
    fill = '#000',
    width = '200%',
    className = '',
    viewBox = '0 0 32 32',
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ''}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            fill={fill}
            d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
            stroke="black"
            stroke-width="2"
        />
    </svg>
);

export default IconBack;
