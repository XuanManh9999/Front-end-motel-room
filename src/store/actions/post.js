import actionTypes from "./actionTypes";
import { apiGetPosts, apiGetPostsLimit } from "../../services/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data?.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_FAIL,
        data: response?.data,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_FAIL,
      data: null,
    });
  }
};
export const getPostsLimit = (page) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(page);
    if (response?.data?.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT_SUCCESS,
        data: response?.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT_FAIL,
        data: response?.data,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT_FAIL,
      data: null,
    });
  }
};
