import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1>Main Screen</h1>
        <Tabs />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainScreen;
