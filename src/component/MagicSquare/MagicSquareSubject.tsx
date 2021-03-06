import React, { memo, useEffect, useState } from "react";
import {
  CategoryLevel,
  CategoryLevelType,
} from "../../hook/useCascadingCategory";

const MagicSquareSubject = ({
  currentLevel,
  subject,
  isSpinning,
  onClickRandomButton,
  onClickSearchButton,
  onClickResetButton,
}: {
  currentLevel: CategoryLevelType;
  subject: string;
  isSpinning: boolean;
  onClickRandomButton: () => void;
  onClickSearchButton: (value: string) => void;
  onClickResetButton: () => void;
}) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <div
      className={`flex w-40 h-40 border-[1px] justify-center content-center bg-ra-300 flex-wrap ${
        isSpinning ? `pointer-events-none` : `pointer-events-auto`
      }`}
      onMouseOver={() =>
        setMouseOver(currentLevel !== CategoryLevel.NOTHING && true)
      }
      onMouseLeave={() =>
        setMouseOver(currentLevel !== CategoryLevel.NOTHING && false)
      }
    >
      {isSpinning ? (
        <div
          className={`border-t-transparent
        animate-spin
        inline-block
        w-8
        h-8
        border-4
        rounded-full
      `}
        />
      ) : (
        <div className={`flex flex-col`}>
          <div
            className={`flex transition-all w-[100%] ${
              mouseOver ? `h-[50%] leading-[5]` : `h-[100%] leading-[10]`
            } justify-center align-center `}
          >
            {subject}
          </div>
          <div
            className={`flex flex-col w-[100%] transition-all ${
              mouseOver ? `h-[50%]` : `h-0`
            }`}
          >
            {currentLevel !== CategoryLevel.MEDIUM_CATEGORY ? (
              <button
                className={`bg-ra-400 p-1 m-1 text-center rounded text-white transition-all ${
                  mouseOver ? `block` : `hidden`
                }`}
                onClick={onClickRandomButton}
              >
                랜덤 선택
              </button>
            ) : (
              <button
                className={`bg-ra-400 p-1 m-1 text-center rounded text-white transition-all ${
                  mouseOver ? `block` : `hidden`
                }`}
                onClick={onClickResetButton}
              >
                다시하기
              </button>
            )}
            {currentLevel === CategoryLevel.MEDIUM_CATEGORY ? (
              <button
                className={`bg-ra-400 p-1 m-1 text-center rounded text-white transition-all ${
                  mouseOver ? `block` : `hidden`
                }`}
                onClick={() => onClickSearchButton(subject)}
              >
                맛집 검색
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(MagicSquareSubject);
