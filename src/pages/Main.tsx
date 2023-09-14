import React from 'react';
import { useNavigate } from 'react-router';

import IconAdd from '@assets/icons/IconAdd';
import PWABTN from '@components/landing/PWABTN';
import CardSection from '@components/main/card/CardSection';
import Profile from '@components/main/profile/Profile';
import { screenStore } from '@store/screenStore';
import { sideBarStore } from '@store/sideBarStore';

const Main = () => {
  const isSideBarOpen = sideBarStore((state) => state.isSideBarOpen);
  const isVisibleSideBar = sideBarStore((state) => state.isVisibleSideBar);
  const screenSize = screenStore((state) => state.screenSize);

  const navigate = useNavigate();

  return (
    <main
      className={`transition-all duration-300 ease-in-out pt-[108px]  ${
        isVisibleSideBar
          ? isSideBarOpen
            ? ' md:ml-[270px]'
            : ' sm:ml-[0px]'
          : 'md:w-[calc(100vw)] md:ml-0 sm:ml-[0px]'
      }`}
    >
      <div
        className="absolute top-0 left-0 w-[100vw] bg-blue_dark z-[-1]
        sm:h-[313px]
        md:h-[363px]"
      ></div>
      <Profile />
      <section
        className="flex mx-auto my-0
        sm:w-[320px] 
        md:w-[800px] "
      >
        <button
          className="group flex items-center font-Bold justify-center rounded-[7px] hover:text-blue_dark gap-3 hover:bg-white
            sm:w-[320px] sm:h-[46px] sm:mt-[16px] sm:mb-[26px] sm:ml-auto sm:font-bold sm:text-sm sm:text-blue_dark  sm:bg-white 
            md:md:w-[160px] md:h-[45px] mt-[35px] md:ml-auto md:border md:border-white md:text-white md:bg-blue_dark md:fill-white"
          onClick={() => {
            navigate('/addPlan');
          }}
        >
          <IconAdd
            w="w-[16px]"
            h="h-[16px]"
            fill={`${screenSize === 'sm' ? 'fill-[#1A68DB]' : 'fill-white'}`}
          />
          여행 생성하기
        </button>
      </section>
      <CardSection />
      <PWABTN />
    </main>
  );
};

export default Main;
