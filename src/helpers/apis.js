import axios from "axios";

export const dataTableAPI = ({ tbl, trip }) =>
  axios.create({
    baseURL: `/api/${tbl}/${trip}`
  });

export const otherAPI = ({ api, trip }) =>
  axios.create({
    baseURL: `/api/other/${api}/${trip}`
  });
