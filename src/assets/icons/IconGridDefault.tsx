import React from 'react';

import type IconType from 'types/icon';

const IconGridDefault = ({ w, h, fill }: IconType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${w} ${h}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10V0H10V10H0ZM2 2H8V8H2V2Z"
        fill={fill ?? 'black'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10V0H24V10H14ZM16 2H22V8H16V2Z"
        fill={fill ?? 'black'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14V24H24V14H14ZM22 16H16V22H22V16Z"
        fill={fill ?? 'black'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24V14H10V24H0ZM2 16H8V22H2V16Z"
        fill={fill ?? 'black'}
      />
    </svg>
  );
};

export default IconGridDefault;
