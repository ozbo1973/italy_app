import { useState } from "react";

export const usePanelOperations = apiToUse => {
  const [panelOpen, setPanelOpen] = useState();
  const [disableEditAll, setDisableEditAll] = useState(false);
  const [addFormOpen, handleAddFormOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleOpenPanel = (id = "na_0") => e => {
    e.preventDefault();
    console.log(id);
    if (id === "na_0" || id === panelOpen) {
      setPanelOpen();
      return;
    }

    setPanelOpen(id);
  };

  const onHandleAddFormOpen = () => {
    handleAddFormOpen(!addFormOpen);
  };

  const handleSnackOpen = msg => {
    setSnackOpen(!snackOpen);
    setSnackMessage(msg);
  };

  const allFormOpen = panelOpen === `${apiToUse}_all`;

  const newRecords = {
    itin: {
      title: "",
      date: new Date(),
      description: "",
      tickets: 2
    }
  };

  const getNewRecord = newRecords[apiToUse];

  const panel = {
    panelOpen,
    handleOpenPanel,
    allFormOpen,
    disableEditAll,
    setDisableEditAll
  };
  const addForm = { addFormOpen, onHandleAddFormOpen, getNewRecord };
  const snacks = { snackOpen, handleSnackOpen, snackMessage };

  return [panel, addForm, snacks];
};
