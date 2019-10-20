import { useState, useEffect } from "react";
import axios from "axios";

const dataTableAPI = ({ tbl, trip }) =>
  axios.create({
    baseURL: `/api/${tbl}/${trip}`
  });

export const useTableData = config => {
  const [isLoading, setIsLoading] = useState(true);
  const [tblData, setTblData] = useState();
  const [opts, setOpts] = useState(config);

  const getData = async () => {
    try {
      const { data } = await dataTableAPI(opts.apiData).get(opts.pageRoute);
      setTblData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoading && getData();
  }, [isLoading]);

  const create = async newData => {
    await dataTableAPI(opts.apiData).post(opts.pageRoute, newData);
    setIsLoading(true);
  };

  const update = async (newData, oldData) => {
    await dataTableAPI(opts.apiData).patch(
      `${opts.pageRoute}/${oldData._id}`,
      newData
    );
    setIsLoading(true);
  };

  const deleteRecord = async oldData => {
    await dataTableAPI(opts.apiData).delete(`${opts.pageRoute}/${oldData._id}`);
    setIsLoading(true);
  };
  const crud = { create, getData, update, deleteRecord };

  return [isLoading, tblData, crud];
};
