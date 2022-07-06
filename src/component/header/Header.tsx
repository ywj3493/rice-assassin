import React from "react";

const Header = () => (
  <section className={`p-12`}>
    <div className={`flex items-center flex-col`}>
      <h1 className={`text-2xl`}>오늘의 밥도둑</h1>
    </div>
    <div className={`bg-slate-100 h-[2px] rounded-full my-4`}></div>
  </section>
);

export default Header;
