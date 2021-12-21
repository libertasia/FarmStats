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
];

for (let i = 2; i < 240; i++) {
  data.push({
    "location": "farm1",
    "datetime": "2021",
    "sensor_type": "temperature",
    "value": i,
  })
}

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
