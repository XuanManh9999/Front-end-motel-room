import React from "react";
import { SearchItem } from "../../components";
import icons from "../../ultils/icons";
const {
  BsChevronRight,
  CiLocationOn,
  TbReportMoney,
  LiaCropSolid,
  GiFamilyHouse,
  FaSearch,
} = icons;
export default function Search() {
  return (
    <div className=" p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2 w-4/5 mt-2">
      <SearchItem
        text={"Phòng trọ, nhà trọ"}
        IconBefore={<GiFamilyHouse />}
        IconAfter={<BsChevronRight />}
        fontWeight
      />
      <SearchItem
        text={"Toàn quốc"}
        IconBefore={<CiLocationOn />}
        IconAfter={<BsChevronRight />}
      />
      <SearchItem
        text={"Chọn giá"}
        IconBefore={<TbReportMoney />}
        IconAfter={<BsChevronRight />}
      />
      <SearchItem
        text={"Chọn diện tích"}
        IconBefore={<LiaCropSolid />}
        IconAfter={<BsChevronRight />}
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full bg-secondary1  font-semibold text-[13.3px] flex items-center justify-center rounded-md text-white gap-1"
      >
        <FaSearch />
        Tìm kiếm
      </button>
    </div>
  );
}
