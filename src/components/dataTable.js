import { useState } from "react";
import { dataTableAPI } from "../helpers/pageDataQuery";
import MaterialTable from "material-table";

export default function DataTable({
  pageRoute,
  tableData,
  dataTitle,
  baseURL
}) {
  const [state, setState] = useState(tableData);

  return (
    <>
      <MaterialTable
        title={dataTitle}
        columns={state.columns}
        data={state.data}
        options={{
          sorting: true
        }}
        editable={{
          onRowAdd: async newData => {
            await dataTableAPI(baseURL).post(pageRoute, newData);
            const data = [...state.data];
            data.push(newData);
            setState({ ...state, data });
          },
          onRowUpdate: async (newData, oldData) => {
            await dataTableAPI(baseURL).patch(
              `${pageRoute}/${oldData._id}`,
              newData
            );
            const data = [...state.data];
            data[data.indexOf(oldData)] = newData;
            setState({ ...state, data });
          },
          onRowDelete: async oldData => {
            await dataTableAPI(baseURL).delete(`${pageRoute}/${oldData._id}`);
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }
        }}
      />
    </>
  );
}
