import React, { memo } from "react";

const MagicSquareSubject = ({
  subject,
  isSpinning,
  onClickRandomButton,
}: {
  subject: string;
  isSpinning: boolean;
  onClickRandomButton: () => void;
}) => (
  <div
    className={`flex w-40 h-40 border-[1px] justify-center content-center leading-[10] ${
      isSpinning ? `pointer-events-none` : `pointer-events-auto`
    }`}
    onClick={onClickRandomButton}
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
      subject
    )}
  </div>
);

export default memo(MagicSquareSubject);
