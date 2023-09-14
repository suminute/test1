import React from 'react';

import type IconType from 'types/icon';

const IconVector = ({ w, h, fill }: IconType) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${w} ${h}`}
    >
      <path
        d="M23.3672 22.0341L15.7588 14.4257C16.9395 12.8994 17.5781 11.0332 17.5781 9.07027C17.5781 6.72066 16.6611 4.51753 15.0029 2.8564C13.3447 1.19527 11.1357 0.281204 8.78906 0.281204C6.44238 0.281204 4.2334 1.1982 2.5752 2.8564C0.914062 4.5146 0 6.72066 0 9.07027C0 11.4169 0.916992 13.6259 2.5752 15.2841C4.2334 16.9453 6.43945 17.8593 8.78906 17.8593C10.752 17.8593 12.6152 17.2207 14.1416 16.0429L21.75 23.6484C21.7723 23.6707 21.7988 23.6884 21.828 23.7005C21.8571 23.7126 21.8884 23.7188 21.9199 23.7188C21.9515 23.7188 21.9827 23.7126 22.0119 23.7005C22.041 23.6884 22.0675 23.6707 22.0898 23.6484L23.3672 22.374C23.3895 22.3517 23.4072 22.3252 23.4193 22.296C23.4314 22.2669 23.4376 22.2356 23.4376 22.2041C23.4376 22.1725 23.4314 22.1412 23.4193 22.1121C23.4072 22.0829 23.3895 22.0564 23.3672 22.0341ZM13.4297 13.7109C12.1875 14.9501 10.541 15.6328 8.78906 15.6328C7.03711 15.6328 5.39062 14.9501 4.14844 13.7109C2.90918 12.4687 2.22656 10.8222 2.22656 9.07027C2.22656 7.31831 2.90918 5.6689 4.14844 4.42964C5.39062 3.19038 7.03711 2.50777 8.78906 2.50777C10.541 2.50777 12.1904 3.18745 13.4297 4.42964C14.6689 5.67183 15.3516 7.31831 15.3516 9.07027C15.3516 10.8222 14.6689 12.4716 13.4297 13.7109Z"
        fill={fill ?? 'black'}
      />
    </svg>
  );
};

export default IconVector;