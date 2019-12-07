export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GOT_YELP:
      return { ...state, isLoading: true };
    case GET_YELP:
      return {
        ...state,
        data: payload.data,
        errMsg: payload.errMsg,
        isLoading: false
      };

    default:
      return state;
  }
};
