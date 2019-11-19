import { createContext, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import itinReducer from "../reducers/itinerary.reducer";

export const LinksAndDocsContext = createContext();
export const LinksAndDocsDispatch = createContext();

export function LinksAndDocsProvider(props) {
  const router = useRouter();

  const defaultValue = {
    data: [{}],
    errMsg: null,
    isLoading: true,
    panel: { panelOpen: "", disableEditAll: false, allOpen: false },
    isAddFormOpen: false,
    snacks: { isSnackOpen: false, snackMsg: "" },
    config: {
      apiToUse: "linksdocs",
      pageRoute: router.pathname,
      newRecord: {
        category: "",
        description: "",
        url: ""
      }
    }
  };

  const [lndState, lndDispatch] = useReducer(itinReducer, {
    ...defaultValue
  });

  useEffect(() => {
    console.log("render linksDocs context");
  }, []);

  return (
    <LinksAndDocsContext.Provider value={lndState}>
      <LinksAndDocsDispatch.Provider value={lndDispatch}>
        {props.children}
      </LinksAndDocsDispatch.Provider>
    </LinksAndDocsContext.Provider>
  );
}
