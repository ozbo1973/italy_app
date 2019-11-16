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

    case "GETTING_ALL":
      return { ...state, isLoading: true };

    case "CRUD_OPERATION":
      const { record } = action.payload;
      return { ...state, record };

    case "OPEN_PANEL":
      return { ...state, panel: { ...state.panel, panelOpen: action.payload } };

    case "DISABLE_EDIT_ALL":
      return {
        ...state,
        panel: { ...state.panel, disableEditAll: action.payload }
      };

    case "ALL_PANEL_OPEN":
      return { ...state, panel: { ...state.panel, allOpen: action.payload } };

    case "ADDFORM_OPEN":
      return { ...state, isAddFormOpen: action.payload };

    case "SNACK_OPEN":
      const { isSnackOpen, snackMsg } = action.payload;
      return { ...state, snacks: { isSnackOpen, snackMsg } };

    case "UPDATE_CONFIG":
      return {
        ...state,
        config: { ...state.config, dispatch: action.payload }
      };

    default:
      return state;
  }
};

export default reducer;
