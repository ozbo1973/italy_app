import LinksAndDocsDesk from "./linksAndDocsDesk";
import LinksAndDocsMobile from "./linksAndDocsMobile";
import {
  LinksAndDocsDispatch,
  LinksAndDocsContext
} from "../../contexts/linksanddocs.context";
import { getAll } from "../../helpers/hooks/useAPI";
import { useContext, useEffect } from "react";

const LinksAndDocs = ({ isDeskTop, expanded, docsData }) => {
  const lndDispatch = useContext(LinksAndDocsDispatch);
  const { config } = useContext(LinksAndDocsContext);

  useEffect(() => {
    const getData = async () =>
      await getAll(
        { ...config, dispatch: lndDispatch },
        { payload: { isLoading: false } }
      );
    lndDispatch({
      type: "UPDATE_CONFIG",
      payload: lndDispatch
    });

    (isDeskTop || expanded || docsData) &&
      config.pageRoute !== "/" &&
      getData();
  }, [expanded, isDeskTop, config.pageRoute]);

  return isDeskTop ? <LinksAndDocsDesk /> : <LinksAndDocsMobile />;
};

export default LinksAndDocs;
