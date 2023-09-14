import React, { useEffect, useState } from 'react';

import { type PinContentsType } from '@api/pins';
import IconLocationDefault from '@assets/icons/IconLocationDefault';
import IconPin from '@assets/icons/IconPin';
import PinLayout from '@components/common/layout/PinLayout';
import AddMapModal from '@components/plan/addPlan/AddMapModal';
import MapPoly from '@components/plan/common/MapPoly';
import useBooleanState from '@hooks/useBooleanState';
import { datesStore } from '@store/datesStore';
import { updatePinStore } from '@store/updatePinStore';
import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

interface PropsType {
  currentPage: number;
  pins: PinContentsType[][];
  setPins: React.Dispatch<React.SetStateAction<PinContentsType[][]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const AddPlanContents = ({
  currentPage,
  pins,
  setPins,
  setCurrentPage,
}: PropsType) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { value, setNeedValue } = useBooleanState(true);
  const openModal = () => {
    setNeedValue(true);
    setIsOpenModal(!isOpenModal);
  };
  const closeModal = () => {
    setNeedValue(false);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 400);
  };
  const { oldDates, dates } = datesStore();

  const { updateClick } = updatePinStore();
  const updatePin = (idx: number) => {
    const pin = pins[currentPage][idx];
    updateClick(pin, idx);
    openModal();
  };

  const deletePin = (idx: number) => {
    const deletedPins = pins.map((pin, i) => {
      if (i === currentPage) {
        return pin.filter((_, j) => j !== idx);
      }
      return pin;
    });
    setPins(deletedPins);
  };

  useEffect(() => {
    setCurrentPage(() => 0);
    const newPins: PinContentsType[][] = [];
    dates.forEach((date) => {
      if (!oldDates.includes(date)) {
        newPins.push([]);
      } else {
        newPins.push(pins[oldDates.indexOf(date)]);
      }
    });
    setPins(() => newPins);
  }, [dates]);

  return (
    <>
      <div
        className="flex flex-col justify-center gap-5 
        sm:w-[286px] sm:mx-auto
        md:w-[700px]"
      >
        <div
          className="flex items-center font-semibold text-gray_dark_1 gap-[8px]
        sm:text-sm
        md:text-normal md:my-[10px] "
        >
          <IconLocationDefault w="20" h="20" />
          <p>여행 지역</p>
        </div>
        <MapPoly pins={pins[currentPage]} />
        <div className="flex flex-col justify-center gap-5">
          <div
            className="flex items-center my-[10px] font-semibold text-gray_dark_1 gap-[8px]
            md:text-normal md:w-[700px] md:mx-[6px]
            sm:text-sm sm:w-[286px] sm:mx-auto
            "
          >
            <IconPin w="w-[20px]" h="h-[25px]" fill="#4E4F54" />
            <p>방문할 장소</p>
          </div>
          {pins[currentPage]?.map((pin, idx: number) => {
            return (
              <div key={uuid()}>
                <PinLayout
                  pin={pin}
                  idx={idx}
                  isEnding={false}
                  updatePin={updatePin}
                  deletePin={deletePin}
                />
              </div>
            );
          })}
          {dates.length !== 0 && (
            <div
              className="flex items-center justify-between  pb-[60px]
            sm:w-[286px] 
            md:w-[651px] md:mx-[25px] md:my-[8px]"
            >
              <p
                className="rounded-full bg-gradient-to-r from-[#5E9fff] from-0% to-[#1a68db] via-100% font-semibold text-white border-[5px] border-white 
              sm:w-[30px] sm:h-[30px]
              md:w-[35px] md:h-[35px]"
              ></p>
              <button
                aria-label="addplancontents-placeadd-btn"
                type="button"
                onClick={openModal}
                className="border border-dashed rounded-lg font-bold  text-gray_dark_1 hover:bg-navy_light_1 duration-200
                sm:w-[240px] sm:h-[65px] sm:mr-[2px] sm:text-[11px]
                md:w-pin_card md:h-pin_card md:text-[18px]"
              >
                장소 추가하기
              </button>
            </div>
          )}
        </div>
      </div>
      {isOpenModal && (
        <AddMapModal
          setPins={setPins}
          closeModal={closeModal}
          currentPage={currentPage}
          value={value}
        />
      )}
    </>
  );
};

export default AddPlanContents;
