import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
function PageNumber({ number }) {
  const navigate = useNavigate();
  const handleOnChangePage = () => {
    navigate({
      pathname: "/", // truoc dau ? la pathname, sau dau ? la search
      search: createSearchParams({
        page: number,
      }).toString(),
    });
  };
  return (
    <div
      className="px-[20px] py-[15px] text-[#333]  hover:border-[#ddd] bg-white hover:bg-[#ddd]  rounded-md cursor-pointer flex items-center justify-center "
      onClick={handleOnChangePage}
    >
      {number}
    </div>
  );
}
export default React.memo(PageNumber);
