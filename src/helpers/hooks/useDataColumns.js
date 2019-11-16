import { formatDate } from "../../helpers/pageHelpers";
import { useIcons } from "./useIcons";

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
  ],
  linksdocs: [
    {
      title: "Category",
      field: "category",
      lookup: {
        1: "Flight",
        2: "Train",
        3: "Lodging",
        4: "Luggage",
        5: "Events",
        6: "Other",
        7: "Photos"
      },
      cellStyle: {
        textAlign: "center"
      },
      render: rowData => {
        const iconSet = useIcons("listItemsData");
        const icon = iconSet.find(icon => icon.cat === rowData.category);
        return icon && icon.icon;
      }
    },
    { title: "Description", field: "description" },
    {
      title: "View",
      field: "url",
      render: rowData => (
        <a href={rowData.url} target="_blank">
          click to view
        </a>
      )
    }
  ]
};
export const useDataTableCols = apiToUse => columns[apiToUse];
