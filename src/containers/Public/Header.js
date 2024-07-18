import { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
const { CiCirclePlus } = icons;
function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const goLogin = useCallback((flag) => {
    nav(path.LOGIN, {
      state: { flag },
    });
  }, []);

  return (
    <div className="w-3/5 flex items-center justify-between">
      <Link to={"/"}>
        <img
          className="w-[240px] h-[70px] object-contain"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="flex gap-1 items-center">
        {!isLoggedIn && (
          <div className="flex gap-1 items-center">
            <span>Phongtro123.com xin chào! </span>
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
          </div>
        )}
        {isLoggedIn && (
          <div className="flex items-center gap-1">
            <small>Ten !</small>
            <Button
              text="Đăng tin mới"
              textColor="text-white"
              bgColor="bg-secondary2"
              IcAfter={CiCirclePlus}
            />
            <Button
              text="Đăng xuất"
              textColor="text-white"
              bgColor="bg-red-700"
              onClick={() => dispatch(actions.logout())}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
