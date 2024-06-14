import { NavLink } from "react-router-dom";
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
  return (
    <div className="w-screen flex justify-center bg-secondary1">
      <div className="w-1100">
        <ul className="flex items-center justify-between ">
          {nav &&
            nav?.length > 0 &&
            nav.map((item, index) => (
              <li className="font-medium h-full" key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
