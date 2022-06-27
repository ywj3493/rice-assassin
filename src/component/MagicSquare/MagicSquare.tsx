import React, { useCallback, useEffect, useState } from "react";
import Category from "../../interface/Category";
import { CategoryLevelType } from "../../hook/useCascadingCategory";
import MagicSquareSubject from "./MagicSquareSubject";
import MagicSquareItem from "./MagicSquareItem";

const MagicSquare = ({
  currentLevel,
  currentCategory,
  itemList,
  chooseChild,
  chooseRandom,
}: {
  currentLevel: CategoryLevelType;
  currentCategory: Category;
  itemList: Category[];
  chooseChild: (childKey: string) => void;
  chooseRandom: () => void;
}) => {
  const [highlight, setHighlight] = useState<number | null>();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const rotateList = [1, 2, 5, 8, 7, 6, 3, 0];

  useEffect(() => {
    setHighlight(null);
  }, [isSpinning]);

  const startRoulette = (time: number, index: number, count: number) => {
    setIsSpinning(true);
    if (time > 800) {
      chooseChild(itemList[rotateList[(index + 7) % 8]].key);
      return;
    }
    setTimeout(() => {
      setHighlight(rotateList[index % 8]);
      startRoulette(time * 1.4, index + 1, count + 1);
    }, time);
  };

  const onClickRandomButton = () => {
    startRoulette(20, Math.floor(Math.random() * 8), 0);
  };

  const onClickItemButton = (value: number) => {
    setHighlight(value);
    chooseChild(itemList[value].key);
  };

  const onAnimationEnd = () => {
    console.dir("onAnimationEnd");
    setIsSpinning(false);
  };

  return (
    <div className="flex flex-col">
      {[...Array(3)].map((value, x) => {
        return (
          <div className="flex flex-row" key={`ms-x-${x}`}>
            {[...Array(3)].map((value, y) => {
              const index = x * 3 + y;
              return index === 4 ? (
                <MagicSquareSubject
                  key={`ms-y-${currentLevel}${index}`}
                  subject={itemList[index]?.name}
                  isSpinning={isSpinning}
                  onClickRandomButton={onClickRandomButton}
                />
              ) : (
                <MagicSquareItem
                  key={`ms-y-${currentLevel}${index}`}
                  index={index}
                  item={itemList[index]?.name}
                  highlight={highlight === index}
                  onClickItemButton={(index) => onClickItemButton(index)}
                  onAnimationEnd={onAnimationEnd}
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
