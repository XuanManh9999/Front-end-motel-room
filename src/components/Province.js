import React from "react";
import ProvinceButton from "./ProvinceButton";
import { location } from "../ultils/constant";

export default function Province() {
  return (
    <div className="py-3">
      <h2 className="text-center py-2  font-bold text-[17px] text-[#333]">
        Khu vực nổi bật
      </h2>
      <div className="flex gap-2 justify-center items-center">
        {location &&
          location.map((item) => {
            return (
              <ProvinceButton
                key={item.id}
                name={item.name}
                images={item.image}
              />
            );
          })}
      </div>
    </div>
  );
}
