import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useCascadingCategory from "./hook/useCascadingCategory";
import MagicSquare from "./component/MagicSquare/MagicSquare";
import Category from "./interface/Category";

function App() {
  const [
    currentLevel,
    currentCategory,
    getChildren,
    chooseChild,
    chooseRandom,
  ] = useCascadingCategory();
  const testCurrentCategory: Category = { key: "test", name: "test" };
  return (
    <div>
      <div className="bg-blue-400 font-bold">오늘의 밥도둑</div>
      <MagicSquare
        currentCategory={
          currentCategory ? currentCategory : testCurrentCategory
        }
        getChildren={getChildren}
        chooseChild={chooseChild}
        chooseRandom={chooseRandom}
      />
    </div>
  );
}

export default App;
