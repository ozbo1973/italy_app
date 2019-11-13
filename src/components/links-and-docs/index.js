import LinksAndDocsDesk from "./linksAndDocsDesk";
import LinksAndDocsMobile from "./linksAndDocsMobile";
import {
  LinksAndDocsDispatch,
  LinksAndDocsContext
} from "../../contexts/linksanddocs.context";
import { getAll } from "../../helpers/hooks/useAPI";
import { useContext, useEffect } from "react";

const LinksAndDocs = ({ isDeskTop, expanded }) => {
  const lndDispatch = useContext(LinksAndDocsDispatch);
  const { config } = useContext(LinksAndDocsContext);

  useEffect(() => {
    lndDispatch({
      type: "UPDATE_CONFIG",
      payload: lndDispatch
    });
    isDeskTop ||
      (expanded &&
        (async () =>
          await getAll(
            { ...config, dispatch: lndDispatch },
            { payload: { isLoading: false } }
          ))());
  }, [expanded]);

  return isDeskTop ? <LinksAndDocsDesk /> : <LinksAndDocsMobile />;
};

export default LinksAndDocs;
