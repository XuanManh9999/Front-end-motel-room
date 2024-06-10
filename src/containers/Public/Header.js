import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constant";

const { CiCirclePlus } = icons;
function Header() {
  const nav = useNavigate();
  const goLogin = useCallback((flag) => {
    nav(path.LOGIN, {
      state: { flag },
    });
  }, []);

  return (
    <div className="w-1100 flex items-center justify-between">
      <Link to={"/"}>
        <img
          className="w-[240px] h-[70px] object-contain"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="flex gap-1 items-center">
        <smaill>Phongtro123.com xin chào! </smaill>
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(false)}
        />
        <Button
          text="Đăng ký"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(true)}
        />
        <Button
          text="Đăng tin mới"
          textColor="text-white"
          bgColor="bg-secondary2"
          IcAfter={CiCirclePlus}
        />
      </div>
    </div>
  );
}

export default Header;
