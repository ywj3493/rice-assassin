import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useCascadingCategory, {
  useMockCascadingCategory,
} from "./hook/useCascadingCategory";
import MagicSquare from "./component/MagicSquare/MagicSquare";
import Category from "./interface/Category";
import { fillUpToLen } from "./lib/randUtil";

function App() {
  const [
    currentLevel,
    currentCategory,
    getChildren,
    chooseChild,
    chooseRandom,
  ] = useCascadingCategory();
  const primaryCurrentCategory: Category = { key: "primary", name: "테마" };
  const itemList = fillUpToLen(getChildren(), 8);
  itemList.splice(
    4,
    0,
    currentCategory ? currentCategory : primaryCurrentCategory
  );
  const onClickResetButton = () => {
    console.dir("onClickResetButton");
  };
  return (
    <div className="bg-ra-100 font-bold">
      <div>오늘의 밥도둑</div>
      <MagicSquare
        currentLevel={currentLevel}
        currentCategory={
          currentCategory ? currentCategory : primaryCurrentCategory
        }
        itemList={itemList}
        chooseChild={chooseChild}
        chooseRandom={chooseRandom}
        onClickResetButton={onClickResetButton}
      />
    </div>
  );
}

export default App;
