import React from 'react'

const BurgerIcon = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    viewBox="0 0 32 32"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        d="M4 24h24v-2.667h-24v2.667zM4 17.333h24v-2.667h-24v2.667zM4 8v2.667h24v-2.667h-24z"
      />
    </svg>
  );

export default BurgerIcon
  


