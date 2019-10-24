import { useState } from "react";

export const usePanelOperations = apiToUse => {
  const [panelOpen, setPanelOpen] = useState(null);
  const [addFormOpen, handleAddFormOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleOpenPanel = id => e => {
    e.preventDefault();
    if (!id) {
      setPanelOpen(null);
      return;
    }
    if (id === panelOpen) {
      return setPanelOpen(null);
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

  const panel = { panelOpen, handleOpenPanel, allFormOpen };
  const addForm = { addFormOpen, onHandleAddFormOpen };
  const snacks = { snackOpen, handleSnackOpen, snackMessage };

  return [panel, addForm, snacks];
};
