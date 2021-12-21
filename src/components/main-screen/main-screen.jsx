import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import DataTable from "../data-table/data-table";

const data = [
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 1,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 2,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 3,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 4,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 5,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 6,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 7,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 8,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 9,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 10,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 11,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 12,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 13,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 14,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 15,
  },
  {
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": 16,
  },
];

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1>Main Screen</h1>
        <Tabs />
        <DataTable
          data={data}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainScreen;
