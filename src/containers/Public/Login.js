import { InputForm, Button } from "../../components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// the me define the actions
import * as actions from "../../store/actions";

function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

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
    let finalPayLoad = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };

    let invalids = validate(finalPayLoad);

    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  const validate = (payload) => {
    // validate
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            msg: "Bạn không được để trống trường này",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: "Mật khẩu phải lớn hơn 6 ký tự",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
  };
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="text-2xl mb-3 font-bold">
        {isRegister ? "Đăng Ký" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister ? (
          <InputForm
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label={"HỌ TÊN"}
            value={payload.name}
            name={"name"}
            type={"text"}
            setValue={onChangeValue}
          />
        ) : (
          ""
        )}
        <InputForm
          invalidFields={invalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          setInvalidFields={setInvalidFields}
          value={payload.phone}
          name={"phone"}
          type={"number"}
          setValue={onChangeValue}
        />
        <InputForm
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          label={"MẬT KHẨU"}
          value={payload.password}
          name={"password"}
          type={"password"}
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
            <div className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
              Bạn đã có tài khoản? &nbsp;
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => {
                  setIsRegister(false);
                  setPayload({ phone: "", password: "", name: "" });
                  setInvalidFields([]);
                }}
              >
                Đăng nhập ngay.
              </span>
            </div>
          ) : (
            <>
              <div className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
                Bạn quên mật khẩu.
              </div>
              <div
                onClick={() => {
                  setIsRegister(true);
                  setPayload({ phone: "", password: "", name: "" });
                  setInvalidFields([]);
                }}
                className="text-[blue] hover:text-[orange] cursor-pointer text-sm"
              >
                Tạo tài khoản mới.
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default Login;
