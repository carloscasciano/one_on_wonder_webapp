import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage";
import IceBreakers from "./pages/IceBreakers";
import CreateSession from "./pages/CreateSession";
import OptionsPage from "./pages/OptionsPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ activeTabIndex, event }) => {
    setCurrentPage(activeTabIndex);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        height: "100vh",
        /* backgroundImage: `url("https://www.transparenttextures.com/patterns/bright-squares.png")`, */
        
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <MainContainer
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {currentPage === 0 ? (
          <CreateSession />
        ) : currentPage === 1 ? (
          <QuestionsPage />
        ) : currentPage === 2 ? (
          <AboutPage />
          
        ) : currentPage === 3 ? (
          <OptionsPage />
        ) : currentPage === 4 ? (
          <IceBreakers />
        ) : null}
      </div>
    </div>
  );
}

export default App;
