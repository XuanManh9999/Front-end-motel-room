import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString, path} from "../../ultils/constant";
const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
  { name: "Nhà cho thuê", path: "nha-cho-thue" },
  { name: "Mặt bằng văn phòng", path: "mat-bang-van-phong" },
];

const notActive =
  "hover:bg-secondary2 text-white  bg-secondary1 h-full block py-2 px-4";
const active =
  "hover:bg-secondary2 text-white bg-secondary2 h-full block py-2 px-4";
function Navigation() {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGetCategories();
      if (data.data.err === 0) {
        setCategorys(data.data.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen flex justify-center bg-secondary1">
      <div className="w-1100">
        <ul className="flex items-center justify-between ">
          <li className="font-medium h-full" key={categorys.code}>
            <NavLink
              to={path.HOME}
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              {"Trang chủ"}
            </NavLink>
          </li>

          {categorys &&
            categorys?.length > 0 &&
            categorys.map((item, index) => (
              <li className="font-medium h-full" key={categorys.code}>
                <NavLink
                  to={formatVietnameseToString(item.value)}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
