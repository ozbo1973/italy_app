export const usePanelOps = config => {
  const { dispatch } = config;

  const toggleState = (type, payload) => () => {
    dispatch({
      type,
      payload: !payload
    });
  };

  const handleOpenPanel = (selectedPanel = "na_0", panelOpen) => e => {
    let panelToOpen;
    e.preventDefault();
    panelToOpen =
      selectedPanel === "na_0" || selectedPanel === panelOpen
        ? null
        : selectedPanel;

    dispatch({
      type: "OPEN_PANEL",
      payload: panelToOpen
    });
    // console.log(!!panelToOpen, panelToOpen.split("_")[1] !== "all");
    dispatch({
      type: "DISABLE_EDIT_ALL",
      payload: !!panelToOpen && panelToOpen.split("_")[1] !== "all"
    });

    dispatch({
      type: "ALL_PANEL_OPEN",
      payload: panelToOpen === `${config.apiToUse}_all`
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
