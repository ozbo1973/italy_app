import { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "../../helpers/pageHelpers";

const dataTableAPI = ({ tbl, trip }) =>
  axios.create({
    baseURL: `/api/${tbl}/${trip}`
  });

export const useTableData = ({ pageRoute, apiData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tblData, setTblData] = useState();
  // const pgRoute = pageRoute.split("/")[1];

  const getData = async () => {
    try {
      const { data } = await dataTableAPI(apiData).get(pageRoute);
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
    await dataTableAPI(apiData).post(pageRoute, newData);
    setIsLoading(true);
  };

  const update = async (newData, oldData) => {
    await dataTableAPI(apiData).patch(`${pageRoute}/${oldData._id}`, newData);
    setIsLoading(true);
  };

  const deleteRecord = async oldData => {
    await dataTableAPI(apiData).delete(`${pageRoute}/${oldData._id}`);
    setIsLoading(true);
  };
  const crud = { create, getData, update, deleteRecord };
  return [isLoading, tblData, crud];
};

const columns = {
  itin: [
    {
      title: "Date",
      field: "date",
      type: "datetime",
      defaultSort: "asc",
      render: rowData => formatDate(rowData.date)
    },
    {
      title: "Title",
      field: "title",
      render: rowData => <strong>{rowData.title}</strong>
    },
    {
      title: "Description",
      field: "description"
    },
    {
      title: "Tickets Required",
      field: "tickets",
      lookup: { 1: "yes", 2: "no" }
    }
  ]
};

export const useDataCols = api => {
  const [cols, setCols] = useState();
  useEffect(() => {
    setCols(columns[api]);
  }, [api]);

  return [cols];
};
