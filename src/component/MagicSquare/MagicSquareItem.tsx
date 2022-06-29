import React, { memo } from "react";

const MagicSquareItem = ({
  index,
  item,
  highlight,
  animation,
  onClickItemButton,
  onAnimationEnd,
}: {
  index: number;
  item: string;
  highlight: boolean;
  animation: string | null;
  onClickItemButton: (index: number) => void;
  onAnimationEnd: () => void;
}) => (
  <div
    className={`flex w-40 h-40 border-[1px] justify-center leading-[10] text-white 
    bg-ra-200
    transition-all ${highlight ? `scale-110 border-yellow-300 border-4` : ``}
    ${animation ? `animate-spin1` : `animate-none`}
    hover:scale-110
    `}
    onClick={() => onClickItemButton(index)}
    onAnimationEnd={() => onAnimationEnd()}
  >
    {item}
  </div>
);

export default memo(MagicSquareItem);
