import { InputForm, Button } from "../../components";

function Login() {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="text-2xl mb-3 font-bold">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-5">
        <InputForm label={"SỐ ĐIỆN THOẠI"} />
        <InputForm label={"MẬT KHẨU"} />
        <Button
          text="Đăng nhập"
          bgColor="bg-secondary1"
          textColor={"text-white"}
          fullWidth
        />
      </div>
      <div className="flex justify-between mt-3">
        <small className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
          Bạn quên mật khẩu
        </small>
        <small className="text-[blue] hover:text-[orange] cursor-pointer text-sm">
          Tạo tài khoản mới
        </small>
      </div>
    </div>
  );
}

export default Login;
