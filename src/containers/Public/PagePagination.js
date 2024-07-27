import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageNumber } from "../../components";
import icons from "../../ultils/icons";
const { GrChapterNext, GrChapterPrevious } = icons;
export default function PagePagination({ number }) {
  const { count, posts } = useSelector((state) => state.post);
  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(+number);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    if (currentPage + 1 >= maxPage - 1) setIsHideEnd(true);
    else setIsHideEnd(false);
    if (currentPage - 2 <= 1) setIsHideStart(true);
    else setIsHideStart(false);
  }, [count, posts, currentPage]);

  return (
    <div>
      <div className="flex justify-center space-x-2 py-5">
        {isHideStart ? (
          <>
            <PageNumber
              icon={<GrChapterPrevious />}
              setCurrentPage={setCurrentPage}
              text={"1"}
            />
            <PageNumber icon={"..."} />
          </>
        ) : (
          ""
        )}
        {arrPage.length > 0 &&
          arrPage.map((item, index) => {
            return (
              <PageNumber
                key={index}
                text={item}
                currentPage={number}
                setCurrentPage={setCurrentPage}
              />
            );
          })}
        {isHideEnd ? (
          <>
            <PageNumber text={"..."} />
            <PageNumber
              icon={<GrChapterNext />}
              setCurrentPage={setCurrentPage}
              text={Math.floor(count / posts.length)}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
