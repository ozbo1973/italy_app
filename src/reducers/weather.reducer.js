export default (state, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, isLoading: true };

    case "GOT_WEATHER":
      return {
        ...state,
        data: action.payload.data,
        errMsg: action.payload.errMsg,
        isLoading: false
      };

    default:
      return { ...state };
  }
};
