import { Link } from "react-router-dom";
import { InputForm, Button } from "../../components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import { useDispatch } from "react-redux";

// the me define the actions
import * as actions from "../../store/actions";

function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  const handleSubmid = async () => {
    dispatch(actions.register(payload));
  };
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="text-2xl mb-3 font-bold">
        {isRegister ? "Đăng Ký" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister ? (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            name={"name"}
            setValue={onChangeValue}
          />
        ) : (
          ""
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          name={"phone"}
          setValue={onChangeValue}
        />
        <InputForm
          label={"MẬT KHẨU"}
          value={payload.password}
          name={"password"}
          setValue={onChangeValue}
        />
        <Button
          text={isRegister ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
          bgColor="bg-secondary1"
          textColor={"text-white"}
          fullWidth
          onClick={handleSubmid}
        />
      </div>
      <div className="flex justify-between mt-3">
        <>
          {isRegister ? (
            <small className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
              Bạn đã có tài khoản? &nbsp;
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                Đăng nhập ngay.
              </span>
            </small>
          ) : (
            <>
              <small className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
                Bạn quên mật khẩu.
              </small>
              <small
                onClick={() => {
                  setIsRegister(true);
                }}
                className="text-[blue] hover:text-[orange] cursor-pointer text-sm"
              >
                Tạo tài khoản mới.
              </small>
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default Login;
