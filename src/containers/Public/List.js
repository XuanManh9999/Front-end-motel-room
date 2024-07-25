import React from "react";
import { text } from "../../ultils/constant";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";


export default function List() {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  React.useEffect(() => {
    dispatch(getPostsLimit(0));
  }, []);
  return (
    <div className="w-full border  p-5 my-[3px] bg-white shadow-md rounded-md ">
      <div className="flex items-center justify-between ">
        <h4 className="text-[18.2px] font-semibold">{text.LIST_TITLE}</h4>
        <span>{posts && posts?.updatedAt}</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>{text.LIST_SORT}:</span>
        <Button bgColor={"bg-gray-200"} text={"Mặc định"} />
        <Button bgColor={"bg-gray-200"} text={"Mới nhất"} />
      </div>
      <div className="items">
        {posts &&
          posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                images={JSON.parse(item.images?.image)}
                address={item.address}
                attributes={item.attributes}
                categoryCode={item.categoryCode}
                description={JSON.parse(item.description)}
                star={+item.star}
                title={item.title}
                updateAt={item.updatedAt}
                user={item.user}
              />
            );
          })}
      </div>
    </div>
  );
}
