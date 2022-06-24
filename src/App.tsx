import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useCascadingCategory from "./hook/useCascadingCategory";
import MagicSquare from "./component/MagicSquare/MagicSquare";

function App() {
  const [
    currentLevel,
    currentCategory,
    getChildren,
    chooseChild,
    chooseRandom,
  ] = useCascadingCategory();
  console.dir(getChildren());
  return (
    <div>
      <div className="bg-blue-400 font-bold">오늘의 밥도둑</div>
      <MagicSquare
        currentCategory={currentCategory}
        getChildren={getChildren}
        chooseChild={chooseChild}
        chooseRandom={chooseRandom}
      />
    </div>
  );
}

export default App;
