import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useCascadingCategory, {
  useMockCascadingCategory,
} from "./hook/useCascadingCategory";
import Header from "./component/header/Header";
import MagicSquare from "./component/MagicSquare/MagicSquare";
import Category from "./interface/Category";
import { fillUpToLen } from "./lib/randUtil";
import Footer from "./component/footer/Footer";

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
      <Header />
      <section className={`flex justify-center`}>
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
      </section>
      <Footer />
    </div>
  );
}

export default App;
