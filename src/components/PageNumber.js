import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const notActive =
  "w-[46px] h-[48px] text-[#333]  hover:border-[#ddd] bg-white hover:bg-[#ddd]  rounded-md cursor-pointer flex items-center justify-center ";

const active =
  "w-[46px] h-[48px] text-white  hover:border-[#ddd] bg-[#e13427]  rounded-md cursor-pointer flex items-center justify-center ";
function PageNumber({ text, currentPage, icon, setCurrentPage, type }) {
  const navigate = useNavigate();
  const handleOnChangePage = () => {
    setCurrentPage(+text);
    navigate({
      pathname: "/", // truoc dau ? la pathname, sau dau ? la search
      search: createSearchParams({
        page: text,
      }).toString(),
    });
  };
  return (
    <div
      className={+currentPage === +text ? active : notActive}
      onClick={handleOnChangePage}
    >
      {icon || text}
    </div>
  );
}
export default React.memo(PageNumber);
