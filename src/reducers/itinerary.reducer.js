const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      const { data, errMsg, isLoading } = action.payload;
      return {
        ...state,
        data,
        errMsg,
        isLoading
      };
    case "CRUD_OPERATION":
      const { record } = action.payload;
      return { ...state, record };

    default:
      return state;
  }
};

export default reducer;
