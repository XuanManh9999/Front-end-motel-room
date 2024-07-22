import actionTypes from "../actions/actionTypes";
const initState = {
  posts: [],
  msg: "",
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action?.data?.data || [],
        msg: action?.data.msg || "",
      };
    case actionTypes.GET_POSTS_FAIL:
      return {
        ...state,
        posts: [],
        msg: action.data.msg || "",
      };
    default:
      return state;
  }
};
export default postReducer;
