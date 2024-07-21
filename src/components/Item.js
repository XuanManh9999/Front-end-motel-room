import React from "react";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
const urlImage = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/05/12/img-20240512-084413_1715527892.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/05/12/img-20240512-084402_1715527888.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/05/12/img-20240512-084354_1715527888.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/05/12/img-20240512-084352_1715527890.jpg",
];
const { GoHeart, GoHeartFill, IoIosStar, BsFillBookmarkStarFill } = icons;

function Item() {
  return (
    <div className="w-full flex py-[15px]  border-t-2 border-t-[red] h-[300px] overflow-auto">
      <div className="w-3/5 flex flex-wrap gap-[1px] items-center">
        {urlImage?.map((item, index) => (
          <img
            className="w-[48%] h-[50%]  object-cover "
            src={item}
            alt={index}
          />
        ))}
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <Link className="font-bold text-[#E13427] text-[14px]  ">
            <IoIosStar className="star-item" size={18} color="yellow" />
            <IoIosStar className="star-item" size={18} color="yellow" />
            <IoIosStar className="star-item" size={18} color="yellow" />
            <IoIosStar className="star-item" size={18} color="yellow" />
            <IoIosStar className="star-item" size={18} color="yellow" />
            CĂN HỘ MINI 1PN, BAO ĐẸP, GIÁ RẺ BÌNH THẠNH, SÁT HUTECH
          </Link>
          <BsFillBookmarkStarFill className="text-yellow-400" size={35} />
        </div>
        <div className="flex my-2 justify-between items-center gap-2">
          <span className="font-bold text-green-600">3.7 triệu/tháng</span>
          <span>35m²</span>
          <span>Quận Bình Thạnh, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-600">
          CĂN HỘ ZION 1PN VỊ TRÍ: Xô Viết Nghệ Tĩnh P26 Q.Bình Thạnh CÔNG VIÊN
          view sông kế bên. Cách CHỢ chỉ 200m, phòng GYM cạnh nhà. Hầm xe RỘNG
          RÃI,…
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 my-3">
            <img
              src="https://64.media.tumblr.com/fe82537564823d78f35afe47a94a71f4/tumblr_mqv44zDpUm1s5jjtzo1_500.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p>Toàn</p>
          </div>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="bg-blue-700 text-white px-[3px] py-[7px] rounded-md h-[30px] flex items-center"
            >
              Gọi 0352593469
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
  )
}

export default React.memo(Item);
