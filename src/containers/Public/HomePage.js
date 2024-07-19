import React from "react";
import { text } from "../../ultils/constant";
import { Province } from "../../components";
const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-center font-bold text-[28px] ">
          {text.HOME_TITLE}
        </h1>
        <p className="text-[#65676b] font-[14px]">{text.HOME_DESC}</p>
      </div>
      <Province />
    </div>
  );
};

export default HomePage;
