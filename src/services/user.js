import AxiosConfig from "../axiosConfig";
export const ApiGetUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await AxiosConfig({
        method: "GET",
        url: "/api/v1/user/get-users",
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
  
