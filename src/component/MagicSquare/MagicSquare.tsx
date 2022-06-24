import React, { useEffect, useState } from "react";
import Category from "../../interface/Category";
import { randomSlice } from "../../lib/randUtil";

const MagicSquare = ({
  currentCategory,
  getChildren,
  chooseChild,
  chooseRandom,
}: {
  currentCategory: Category;
  getChildren: () => Category[];
  chooseChild: (childKey: string) => void;
  chooseRandom: () => void;
}) => {
  const [highlight, setHighlight] = useState<number | null>();
  const [selected, setSelected] = useState<number | null>();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const rotateList = [1, 2, 5, 8, 7, 6, 3, 0];
  const tempList = getChildren();
  const itemList =
    tempList.length === 8
      ? tempList.splice(4, 0, currentCategory)
      : [...randomSlice(tempList, 8 - tempList.length), ...tempList].splice(
          4,
          0,
          currentCategory
        );

  useEffect(() => {
    console.dir(
      selected !== null && selected !== undefined ? itemList[selected] : "none"
    );
  }, [selected]);

  const startRoulette = (time: number, index: number, count: number) => {
    setIsSpinning(true);
    if (time > 800) {
      setSelected(rotateList[(index + 7) % 8]);
      setIsSpinning(false);
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
    setSelected(value);
  };

  return (
    <div className="flex flex-col">
      {[...Array(3)].map((value, x) => {
        return (
          <div className="flex flex-row" key={`ms-x-${x}`}>
            {[...Array(3)].map((value, y) => {
              const index = x * 3 + y;
              return (
                <div
                  className={`flex w-40 h-40 border-[1px] justify-center leading-[10] ${
                    index !== 4 ? `hover:scale-110` : ``
                  } transition-all ${
                    highlight !== null &&
                    highlight !== undefined &&
                    highlight === index
                      ? `scale-110 border-yellow-300 border-4`
                      : ``
                  }
                  ${isSpinning ? `pointer-events-none` : `pointer-events-auto`}
                  `}
                  key={`ms-y-${index}`}
                  onClick={
                    index === 4
                      ? onClickRandomButton
                      : () => onClickItemButton(index)
                  }
                >
                  {index === 4 && isSpinning ? (
                    <svg className={`animate-spin h-5 w-5 fill-black`} />
                  ) : (
                    itemList[index].name
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MagicSquare;
