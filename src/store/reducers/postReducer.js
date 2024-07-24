import actionTypes from "../actions/actionTypes";
const initState = {
  posts: [],
  msg: "",
  count: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
    case actionTypes.GET_POSTS_LIMIT_SUCCESS:
      return {
        ...state,
        posts: action?.data?.data?.rows || [],
        msg: action?.data?.msg || "",
        count: action?.data?.data?.count || 0,
      };
    case actionTypes.GET_POSTS_FAIL:
    case actionTypes.GET_POSTS_LIMIT_FAIL:
      return {
        ...state,
        posts: [],
        msg: action?.data?.msg || "",
      };

    default:
      return state;
  }
};
export default postReducer;
