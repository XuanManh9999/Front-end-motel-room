import axiosConfig from "../axiosConfig";
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/v1/post/get-all",
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });

export const apiGetPostsLimit = (page) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/api/v1/post/limit?page=${page}`,
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
