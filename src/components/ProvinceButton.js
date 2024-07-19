import React from "react";

export default function ProvinceButton({ name, images }) {
  return (
    <div className="">
      <img
        className="w-[220px] h-[110px] object-cover rounded-tl-md rounded-tr-md shadow-md"
        src={images}
        alt={name}
      />
      <strong className="text-center block py-[12px] px-[10px] bg-[#fff] rounded-bl-md rounded-br-md text-[#1266dd] shadow-md text-[14px] hover:text-[#f60] cursor-pointer">
        {name}
      </strong>
    </div>
  );
}
