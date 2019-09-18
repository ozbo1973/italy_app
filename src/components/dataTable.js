import { useState } from "react";
import { pageDNLData } from "../helpers/pageDataQuery";
import MaterialTable from "material-table";

export default function DataTable({ tableData, dataTitle, dataComponent }) {
  const [state, setState] = useState(tableData);

  const queryData = {
    LinksAndDocs: query =>
      new Promise((resolve, reject) => {
        const data = pageDNLData(state.filter);
        resolve({
          data
        });
      })
  };
  return (
    <>
      <MaterialTable
        title={dataTitle}
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </>
  );
}
