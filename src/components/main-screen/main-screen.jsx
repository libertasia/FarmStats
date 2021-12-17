import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1>Main Screen</h1>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainScreen;
