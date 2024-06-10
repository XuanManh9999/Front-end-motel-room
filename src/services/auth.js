import ApiConfig from "../axiosConfig";
export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await ApiConfig({
        method: "POST",
        url: "/api/v1/auth/register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
