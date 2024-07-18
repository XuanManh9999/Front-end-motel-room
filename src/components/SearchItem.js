import React from "react";

function SearchItem({ IconBefore, IconAfter, placeholder, text, fontWeight }) {
  return (
    <div className="bg-white py-2 px-4 rounded-md text-gray-400 text-[13px] w-full flex items-center justify-between ">
      <div className="flex items-center gap-1 w-full">
        {IconBefore}
        <span className={`${fontWeight && "font-medium text-black"} w-full overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
      </div>
      {IconAfter}
    </div>
  );
}

export default React.memo(SearchItem);
