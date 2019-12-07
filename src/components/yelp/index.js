import { useContext, useEffect } from "react";
import { otherAPI } from "../../helpers/hooks/useAPI";
import YelpDesk from "./yelpDesk";
import YelpMobile from "./yelpMobile";
import { YelpContext, YelpDispatchContext } from "../../contexts/yelp.context";

const Yelp = ({ isDeskTop, expanded }) => {
  const { isLoading, pageRoute, api, trip } = useContext(YelpContext);
  const dispatch = useContext(YelpDispatchContext);

  useEffect(() => {
    const getData = async () => {
      await dispatch({ type: "GET_YELP" });
      let data = {};
      let errMsg = "";
      try {
        const res = await otherAPI({ api, trip }).get(pageRoute);
        data = res.data;
      } catch (error) {
        errMsg = error;
      }
      dispatch({
        type: "GOT_YELP",
        payload: { data, errMsg }
      });
    };

    (isLoading || expanded) && getData();
  }, [isDeskTop, expanded]);

  return isDeskTop ? <YelpDesk /> : <YelpMobile />;
};

export default Yelp;
