import actionTypes from "../actions/actionTypes";
const initState = {
  userData: [],
  msg: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        userData: action.data,
        msg: action.msg,
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        ...state,
        msg: action.msg,
      };
    default:
      return state;
  }
};

export default userReducer;
