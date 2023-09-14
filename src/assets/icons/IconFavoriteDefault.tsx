import type IconType from 'types/icon';

const IconFavoriteDefault = ({ w, h, fill }: IconType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`sm:w-[15px] sm:h-[15px] md:${w} md:${h}`}
    >
      <path
        d="M11.9999 0L15.5767 8.09062L23.9999 9.16712L17.7872 15.2442L19.4164 24L11.9999 19L4.58344 24L6.21269 15.2442L0 9.16712L8.42313 8.09062L11.9999 0ZM14.2038 9.93144L11.9999 4.946L9.79594 9.93144L4.35188 10.626L8.37406 14.5608L7.42188 19.6719L11.9999 16.5879L16.5759 19.6719L15.6257 14.5608L19.6459 10.6259L14.2038 9.93144Z"
        fill={fill ?? 'black'}
      />
    </svg>
  );
};

export default IconFavoriteDefault;
