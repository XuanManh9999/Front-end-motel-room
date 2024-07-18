import React from "react";
import { Search } from "./index";
import { text } from "../../ultils/constant";
const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Search  />
     <div>
        <h1 className="text-center font-bold text-[28px] ">
          {text.HOME_TITLE}
        </h1>
        <p className="text-[#65676b] font-[14px]">{text.HOME_DESC}</p>
      </div>
    </div>
  );
};

export default HomePage;
