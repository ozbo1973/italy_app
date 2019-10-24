import { createContext, useState } from "react";
import { useTableData } from "../helpers/hooks/useTableData";
import { usePlacesData } from "../helpers/hooks/useStaticData";

export const ItineraryContext = createContext();

export function IntineraryProvider(props) {
  // const {page,apiToUse}= props.children.props
  const [panelOpen, setPanelOpen] = useState(null);
  // const {pageRoute,apiData}=usePlacesData(page,apiToUse)
  // const {isLoading,tblData,crud}=useTableData(pageRoute,apiData)

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

  return (
    <ItineraryContext.Provider value={{ panelOpen, handleOpenPanel }}>
      {props.children}
    </ItineraryContext.Provider>
  );
}
