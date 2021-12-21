import React from "react";
import {TableHeaders} from "../../const";

const DataTable = (props) => {
  const {data} = props;
return (
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
        data.map((entry, index) =>
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
  );
};

export default DataTable;
