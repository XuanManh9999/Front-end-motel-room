import axiosConfig from "../axiosConfig";

export const apiGetCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/v1/category/get-all-categories",
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
