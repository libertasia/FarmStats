import React, {useState} from "react";
import dayjs from "dayjs";
import {FarmsStatsShape, TableHeaders} from "../../const";
import TablePagination from "@mui/material/TablePagination";
import EmptyDataMessage from "../empty-data-message/empty-data-message";

var utc = require("dayjs/plugin/utc")
dayjs.extend(utc)

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
    <React.Fragment>
      {data.length > 0
        ? <div className="table">
            <table className="table__data" role="table">
              <caption className="visually-hidden">Farms Data</caption>
              <thead className="table__header">
                <tr className="table__header-row">
                  {
                    TableHeaders.map ((item) =>
                    (
                      <th key={item.title}>{item.title}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody className="table__body">
                {
                  data.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((entry, index) =>
                    (
                      <tr className="table__body-row" key={`entry-${entry[`location`]}-${index}`}>
                        <td>{entry[`location`]}</td>
                        <td><time dateTime={entry[`datetime`]}>{`${dayjs(`${entry[`datetime`]}`).utc().format(`YYYY-MM-DD, HH:mm`)}`}</time></td>
                        <td>{entry[`sensor_type`]}</td>
                        <td>{entry[`value`]}</td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
            <TablePagination
              className="table__pagination"
              component="div"
              count={data.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              showFirstButton={true}
              showLastButton={true}
            />
          </div>
        : <EmptyDataMessage />
      }
    </React.Fragment>
  );
};

DataTable.propTypes = {
  data: FarmsStatsShape,
};

export default DataTable;
