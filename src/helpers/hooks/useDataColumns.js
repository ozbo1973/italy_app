import { formatDate } from "../../helpers/pageHelpers";

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
export const useDataTableCols = apiToUse => columns[apiToUse];
