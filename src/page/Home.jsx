import React from "react";
import Header from "..//components/Header";
import MainContainer from "..//components/MainContainer";
import TableContainer from "..//components/TableContainer";
import AppContainer from "..//components/AppContainer";
import GraphicContainer from "..//components/GraphicContainer";
import Info from "../components/Info";
import Services from "..//components/Services";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Header />
        <MainContainer />
        <TableContainer />
        <AppContainer />
        <GraphicContainer />
        <Info />
        <Services />
      </div>
    </>
  );
};

export default Home;
