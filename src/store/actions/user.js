import actionTypes from "./actionTypes";
import { ApiGetUsers } from "../../services/user.js";

export const getUsers = () => async (dispatch) => {
  const response = await ApiGetUsers();
  if (response?.data?.error === 0) {
    dispatch({
      type: actionTypes.GET_USERS_SUCCESS,
      data: response.data?.data,
      msg: response.data?.msg,
    });
  } else {
    dispatch({
      type: actionTypes.GET_USERS_FAIL,
      msg: response.data?.msg,
    });
  }
};
