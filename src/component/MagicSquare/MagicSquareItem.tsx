import React, { memo } from "react";
import {
  CategoryLevel,
  CategoryLevelType,
} from "../../hook/useCascadingCategory";

const MagicSquareItem = ({
  currentLevel,
  index,
  item,
  highlight,
  animation,
  except,
  onClickItemButton,
  onChangeCheckbox,
  onAnimationEnd,
}: {
  currentLevel: CategoryLevelType;
  index: number;
  item: string;
  highlight: boolean;
  animation: boolean;
  except: boolean;
  onClickItemButton: (index: number) => void;
  onChangeCheckbox: (index: number) => void;
  onAnimationEnd: () => void;
}) => (
  <div
    className={`flex w-40 h-40 border-[1px] justify-center leading-[10] text-white 
    bg-ra-200
    transition-all ${highlight ? `border-yellow-300 border-4` : ``}
    ${animation ? `animate-flip` : `hover:scale-105 animate-none`}
    `}
    onClick={() => onClickItemButton(index)}
    onAnimationEnd={() => onAnimationEnd()}
  >
    {currentLevel === CategoryLevel.NOTHING ||
    currentLevel === CategoryLevel.MEDIUM_CATEGORY ? null : (
      <input
        type="checkbox"
        checked={!except}
        onClick={(events) => {
          events.stopPropagation();
        }}
        onChange={() => onChangeCheckbox(index)}
      ></input>
    )}
    {item}
  </div>
);
export default memo(MagicSquareItem);
