import { useState, useEffect } from "react";
import Link from "next/link";
import { dataTableAPI } from "../helpers/pageDataQuery";
import useStyles from "../../static/styles/dataTable.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";

const columns = pathname => [
  {
    title: "Category",
    field: "category",
    lookup: {
      1: "Flight",
      2: "Train",
      3: "Lodging",
      4: "Luggage",
      5: "Events",
      6: "Other"
    }
  },
  { title: "Description", field: "description" },
  {
    title: "View",
    field: "url",
    render: rowData => (
      // <Link
      //   href={`/fileViewer?descr=${rowData.description}&url=${rowData.url}&from=${pathname}`}
      //   as={`/fileViewer/${rowData._id}`}
      // >
      //   <a>View</a>
      // </Link>
      <a href={rowData.url} target="_blank">
        View
      </a>
    )
  }
];

const LinksAndDocs = ({ page, docsData }) => {
  const classes = useStyles();
  const [tblData, setTblData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = "linksdocs";
  const dataTitle = "Links And Docs";
  const pageRoute = `/${page.page}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await dataTableAPI(baseURL).get(pageRoute);
        setTblData({ columns: columns(pageRoute), data });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    isLoading && getData();
  }, [isLoading]);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <MaterialTable
          isLoading={isLoading}
          title={dataTitle}
          columns={tblData.columns}
          data={tblData.data}
          options={{
            sorting: true
          }}
          editable={{
            onRowAdd: async newData => {
              await dataTableAPI(baseURL).post(pageRoute, newData);
              setIsLoading(true);
            },
            onRowUpdate: async (newData, oldData) => {
              await dataTableAPI(baseURL).patch(
                `${pageRoute}/${oldData._id}`,
                newData
              );
              setIsLoading(true);
            },
            onRowDelete: async oldData => {
              await dataTableAPI(baseURL).delete(`${pageRoute}/${oldData._id}`);
              setIsLoading(true);
            }
          }}
        />
      </div>
    </Paper>
  );
};

export default LinksAndDocs;

// import { useState, useEffect } from "react";
// import { dataTableAPI } from "../helpers/pageDataQuery";
// import { formatDate } from "../helpers/pageHelpers";
// import DataTable from "./dataTable";
// import useStyles from "../../static/styles/dataTable.style";
// import { Paper, CircularProgress } from "@material-ui/core";

// const linksAndDocsData = (pathname, data) => ({
//   columns: [
//     {
//       title: "Category",
//       field: "category",
//       lookup: {
//         1: "Flight",
//         2: "Train",
//         3: "Lodging",
//         4: "Luggage",
//         5: "Events",
//         6: "Other"
//       }
//     },
//     { title: "Description", field: "description" },
//     {
//       title: "View",
//       field: "url",
//       render: rowData => (
//         <Link
//           href={`/fileViewer?descr=${rowData.description}&url=${rowData.url}&from=/${pathname}`}
//           as={`/fileViewer/${rowData.id}`}
//         >
//           <a>View</a>
//         </Link>
//       )
//     }
//   ],
//   data
// });

// const LinksAndDocs = ({ page }) => {
//   const classes = useStyles();
//   const [lnksDocsData, setLnksDocsData] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const baseURL = "linksdocs";
//   const dataTitle = "Links and Docs";

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await dataTableAPI(baseURL).get(`/${page.page}`);
//         console.log(data);
//         setLnksDocsData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         setIsLoading(true);
//       }
//     };

//     isLoading && getData();
//   }, [lnksDocsData]);

//   return isLoading ? (
//     <Paper className={classes.root}>
//       <CircularProgress />
//     </Paper>
//   ) : (
//     <Paper className={classes.root}>
//       <div className={classes.tableWrapper}>
//         <DataTable
//           pageRoute={`/${page.page}`}
//           baseURL={baseURL}
//           tableData={linksAndDocsData(lnksDocsData)}
//           dataTitle={dataTitle}
//         />
//       </div>
//     </Paper>
//   );
// };

// export default LinksAndDocs;

// const LinksAndDocs = ({ data, path }) => {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root}>
//       <div className={classes.tableWrapper}>
//         <DataTable
//           tableData={linksAndDocsData(path, data)}
//           dataTitle="Docs and Links"
//           dataComponent="LinksAndDocs"
//         />
//       </div>
//     </Paper>
//   );
// };

// export default LinksAndDocs;
