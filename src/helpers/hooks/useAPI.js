import axios from "axios";

const dataTableAPI = ({ tbl, trip }) =>
  axios.create({
    baseURL: `/api/${tbl}/${trip}`
  });

const handleErrMsg = (errMsg, data) =>
  errMsg
    ? { isLoading: false, errMsg, record: {} }
    : { isLoading: true, record: data };

const handleAPI = async ({ apiToUse, pageRoute }, payload, method) => {
  const hasReq = !!payload.req;
  const req = hasReq ? payload.req : null;
  const route =
    hasReq && method !== "post" ? `${pageRoute}/${req._id}` : pageRoute;

  try {
    const { data } = await dataTableAPI({ tbl: apiToUse, trip: "italy" })[
      method
    ](route, req);

    return { data, errMsg: null };
  } catch (error) {
    return { data: [{}], errMsg: error };
  }
};

export const crudAPI = async (config, actionConfig, method) => {
  const { payload, type } = actionConfig;
  const { dispatch } = config;
  const { data, errMsg } = await handleAPI(config, payload, method);

  await dispatch({
    type,
    payload: handleErrMsg(errMsg, data)
  });

  !errMsg && (await getAll(config, { payload: { isLoading: false } }));
};

export const getAll = async (config, { payload }) => {
  const { dispatch } = config;
  const data = await handleAPI(config, payload, "get");

  return dispatch({
    type: "GET_ALL",
    payload: { ...data, ...payload }
  });
};
