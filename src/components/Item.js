import React, { useState } from "react";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
const { GoHeart, GoHeartFill, IoIosStar, BsFillBookmarkStarFill } = icons;

function Item({
  key,
  images,
  address,
  attributes,
  categoryCode,
  star,
  title,
  updateAt,
  user,
  description,
}) {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const render_image_home = images.slice(0, 4);
  const render_star = () => {
    let array_star = [];
    for (let i = 0; i < star; i++) {
      array_star.push(
        <IoIosStar className="star-item" size={18} color="yellow" />
      );
    }
    return array_star;
  };
  return (
    <div className="w-full flex py-[15px]  border-t-2 border-t-[red] h-[300px] overflow-auto cursor-pointer">
      <div className="w-3/5 flex flex-wrap gap-[1px] items-center relative ">
        {images &&
          images.length > 0 &&
          render_image_home?.map((item, index) => {
            return (
              <img
                className="w-[48%] h-[50%]  object-cover "
                src={item?.img}
                alt={item?.alt}
              />
            );
          })}
        <span
          className=" text-red   absolute bottom-1 text-white  right-5"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <GoHeartFill className="text-red-600" size={26} />
          ) : (
            <GoHeart size={26} />
          )}
        </span>
        <span className="bg-overlay-70 text-white p-[5px] text-[14px] rounded-md absolute bottom-1  left-1 ">
          {`${images?.length} ảnh`}
        </span>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <Link className="font-bold text-[#E13427] text-[14px]  ">
            {render_star()}
            {` ${title}`}
          </Link>
          {star >= 3 ? (
            <BsFillBookmarkStarFill className="text-yellow-400" size={35} />
          ) : (
            ""
          )}
        </div>
        <div className="flex my-2 justify-between items-center gap-2">
          <span className="font-bold text-green-600">{attributes.price}</span>
          <span className="text-[14px]">{attributes.acreage}</span>
          <span className="text-[14px]">{attributes.address}</span>
        </div>
        <p className="text-gray-600 text-justify overflow-hidden max-h-[140px] ellipsis">
          {description}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 my-3">
            <img
              src="https://64.media.tumblr.com/fe82537564823d78f35afe47a94a71f4/tumblr_mqv44zDpUm1s5jjtzo1_500.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p>{user.name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="bg-blue-700 text-white px-[3px] py-[7px] rounded-md h-[30px] flex items-center"
            >
              Gọi {user.phone}
            </button>
            <button
              type="button"
              className="text-blue-700 border border-[blue] px-[3px] py-[7px] rounded-md h-[30px] flex items-center custom-button"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Item);
