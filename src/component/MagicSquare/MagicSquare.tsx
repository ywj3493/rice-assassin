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
  chooseRandom,
  onClickResetButton,
}: {
  currentLevel: CategoryLevelType;
  currentCategory: Category;
  itemList: Category[];
  chooseChild: (childKey: string) => void;
  chooseRandom: () => void;
  onClickResetButton: () => void;
}) => {
  const [highlight, setHighlight] = useState<number | null>();
  const [selected, setSelected] = useState<number | null>();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const rotateList = [1, 2, 5, 8, 7, 6, 3, 0];

  const startRoulette = (time: number, index: number, count: number) => {
    setIsSpinning(true);
    if (time > 800) {
      setSelected(rotateList[(index + 7) % 8]);
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

  const onClickSearchButton = () => {
    console.dir("onClickSearchButton");
  };

  const onClickItemButton = (value: number) => {
    setHighlight(value);
    setSelected(value);
  };

  const onAnimationEnd = () => {
    if (selected) {
      chooseChild(itemList[selected]?.key);
    }
    setHighlight(null);
    setIsSpinning(false);
    setSelected(null);
  };

  return (
    <div className="flex flex-col">
      {[...Array(3)].map((value, x) => {
        return (
          <div className={`flex flex-row font-sans`} key={`ms-x-${x}`}>
            {[...Array(3)].map((value, y) => {
              const index = x * 3 + y;
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
                  animation={
                    selected === index
                      ? `animate-larger${rotateList[index]}`
                      : null
                  }
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
