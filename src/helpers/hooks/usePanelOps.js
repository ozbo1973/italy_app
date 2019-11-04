export const usePanelOps = config => {
  const { dispatch } = config;

  const toggleState = (type, payload) => () => {
    dispatch({
      type,
      payload: !payload
    });
  };

  const handleOpenPanel = (id = "na_0", currentID) => e => {
    let panelOpen;
    e.preventDefault();
    id === "na_0" || id === currentID ? (panelOpen = null) : (panelOpen = id);

    dispatch({
      type: "OPEN_PANEL",
      payload: panelOpen
    });

    dispatch({
      type: "DISABLE_EDIT_ALL",
      payload: !!panelOpen && panelOpen.split("_")[1] !== "all"
    });

    dispatch({
      type: "ALL_PANEL_OPEN",
      payload: panelOpen === `${config.apiToUse}_all`
    });
  };

  const handleSnackOpen = (msg, snackState) => {
    dispatch({
      type: "SNACK_OPEN",
      payload: { isSnackOpen: !snackState, snackMsg: msg }
    });
  };

  return { handleOpenPanel, toggleState, handleSnackOpen };
};
