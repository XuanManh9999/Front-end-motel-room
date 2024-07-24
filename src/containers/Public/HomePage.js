import React, { useEffect } from "react";
import { text } from "../../ultils/constant";
import { Province } from "../../components";
import { List } from "../Public/index";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/user";
const HomePage = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-center font-bold text-[28px] ">
          {text.HOME_TITLE}
        </h1>
        <p className="text-[#65676b] font-[14px]">{text.HOME_DESC}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] border border-green-600">Sidebar</div>
      </div>
    </div>
  );
};

export default HomePage;
