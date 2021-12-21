import React, {useState} from "react";
import {TableHeaders} from "../../const";
import TablePagination from "@mui/material/TablePagination";

const DataTable = (props) => {
  const {data} = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <table role="table" width="100%">
        <caption className="visually-hidden">Farms Data</caption>
        <thead>
          <tr>
            {
              TableHeaders.map ((item) =>
              (
                <th key={item.title}>{item.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
             data.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((entry, index) =>
              (
                <tr key={`entry-${entry[`location`]}-${index}`}>
                  <td>{entry[`location`]}</td>
                  <td>{entry[`datetime`]}</td>
                  <td>{entry[`sensor_type`]}</td>
                  <td>{entry[`value`]}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
