import React from "react";
import { text } from "../../ultils/constant";
import { Button } from "../../components";
export default function List() {
  return (
    <div className="w-full border border-blue-600 p-5 my-[3px]">
      <div className="flex items-center justify-between ">
        <h4 className="text-[18.2px] font-semibold">{text.LIST_TITLE}</h4>
        <span>Cập nhật: 12:05 25/08/2024</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>{text.LIST_SORT}:</span>
        <Button bgColor={"bg-gray-200"} text={"Mặc định"}/>
        <Button bgColor={"bg-gray-200"} text={"Mới nhất"}/>
      </div>
    </div>
  );
}
