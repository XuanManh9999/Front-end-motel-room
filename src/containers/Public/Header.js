import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const { CiCirclePlus } = icons;
function Header() {
  const nav = useNavigate();
  const goLogin = useCallback(() => {
    nav(path.LOGIN);
  }, []);

  return (
    <div className="w-1100 flex items-center justify-between">
      <img
        className="w-[240px] h-[70px] object-contain"
        src={logo}
        alt="logo"
      />
      <div className="flex gap-1 items-center">
        <smaill>Phongtro123.com xin chào! </smaill>
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin}
        />
        <Button
          text="Đăng ký"
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin}
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
