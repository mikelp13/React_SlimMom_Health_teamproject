import React from 'react';

const IconCross = ({
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
            d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z"
        />
    </svg>
);

export default IconCross;
