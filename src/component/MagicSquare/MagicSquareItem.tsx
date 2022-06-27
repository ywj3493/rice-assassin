import React, { memo } from "react";

const MagicSquareItem = ({
  index,
  item,
  highlight,
  onClickItemButton,
  onAnimationEnd,
}: {
  index: number;
  item: string;
  highlight: boolean;
  onClickItemButton: (index: number) => void;
  onAnimationEnd: () => void;
}) => (
  <div
    className={`flex w-40 h-40 border-[1px] justify-center leading-[10] ${
      index !== 4 ? `hover:scale-110` : ``
    } transition-all ${highlight ? `scale-110 border-yellow-300 border-4` : ``}
    
    `}
    onClick={() => onClickItemButton(index)}
  >
    {item}
  </div>
);

export default memo(MagicSquareItem);
