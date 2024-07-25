import React from "react";
import { useSelector } from "react-redux";
import { PageNumber } from "../../components";
import icons from "../../ultils/icons";
const {GrChapterNext} = icons;
export default function PagePagination() {
  const { count, posts } = useSelector((state) => state.post);
  const handlePageNumber = () => {
    let max = Math.floor(count / posts?.length || 1);
    const pageNumber = [];
    for (let i = 0; i < max; i++) {
      if (i >= 4) {
        break;
      }
      pageNumber.push(<PageNumber key={i} number={i + 1} />);
    }
    return pageNumber;
  };
  return (
    <div>
      <div className="flex justify-center space-x-2 py-5">
        {handlePageNumber()}
        <PageNumber number={"..."} />
        <PageNumber number={<GrChapterNext />} />
      </div>
    </div>
  );
}
