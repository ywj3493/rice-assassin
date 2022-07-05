import React, { memo, useCallback, useEffect, useState } from "react";
import Category from "../../interface/Category";
import { CategoryLevelType } from "../../hook/useCascadingCategory";
import MagicSquareSubject from "./MagicSquareSubject";
import MagicSquareItem from "./MagicSquareItem";

const MagicSquare = ({
  currentLevel,
  currentCategory,
  itemList,
  chooseChild,
  resetLevel,
}: {
  currentLevel: CategoryLevelType;
  currentCategory: Category;
  itemList: Category[];
  chooseChild: (childKey: string) => void;
  resetLevel: () => void;
}) => {
  const [highlight, setHighlight] = useState<number | null>();
  const [selected, setSelected] = useState<number | null>();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const rotateList = [1, 2, 5, 8, 7, 6, 3, 0];
  const originList = [
    `origin-top-left`,
    `origin-top`,
    `origin-top-right`,
    `origin-left`,
    `origin-center`,
    `origin-right`,
    `origin-bottom-left`,
    `origin-bottom`,
    `origin-bottom-right`,
  ];

  /**
   * 마방진의 item 부분을 룰렛 돌리듯 랜덤으로 선택하게 하는 함수, 재귀를 통해 순서대로 강조 하게 된다.
   * @param time : 다음 네모칸이 강조 되는 시간
   * @param index : 강조될 칸의 index
   * @returns
   */
  const startRoulette = (time: number, index: number) => {
    setIsSpinning(true);
    if (time > 800) {
      //해당 setTimeout 함수의 delay 값이 마지막 칸에 멈춘 후 선택하는 로직으로 이동하게 하는 최소 값
      setTimeout(() => {
        setSelected(rotateList[(index + 7) % 8]);
      }, 200);
      return;
    }
    setTimeout(() => {
      setHighlight(rotateList[index % 8]);
      startRoulette(time * 1.25, index + 1);
    }, time);
  };

  const onClickRandomButton = () => {
    startRoulette(20, Math.floor(Math.random() * 8));
  };

  const onClickSearchButton = () => {
    console.dir("onClickSearchButton");
  };

  const onClickItemButton = (value: number) => {
    setHighlight(value);
    setSelected(value);
  };

  const onClickResetButton = () => {
    resetLevel();
  };

  const onAnimationEnd = () => {
    setTimeout(() => {
      if (selected) {
        chooseChild(itemList[selected]?.key);
      }
      setHighlight(null);
      setIsSpinning(false);
      setSelected(null);
    }, 0);
  };

  return (
    <div className="flex flex-col">
      {[...Array(3)].map((value, x) => {
        return (
          <div className={`flex flex-row font-sans`} key={`ms-x-${x}`}>
            {[...Array(3)].map((value, y) => {
              const index: number = x * 3 + y;
              return index === 4 ? (
                <MagicSquareSubject
                  key={`ms-y-${currentLevel}${index}`}
                  currentLevel={currentLevel}
                  subject={currentCategory.name}
                  isSpinning={isSpinning}
                  onClickRandomButton={onClickRandomButton}
                  onClickSearchButton={onClickSearchButton}
                  onClickResetButton={onClickResetButton}
                />
              ) : (
                <MagicSquareItem
                  key={`ms-y-${currentLevel}${index}`}
                  index={index}
                  item={itemList[index]?.name}
                  highlight={highlight === index}
                  animation={selected === index}
                  onClickItemButton={() => onClickItemButton(index)}
                  onAnimationEnd={() => onAnimationEnd()}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MagicSquare;
