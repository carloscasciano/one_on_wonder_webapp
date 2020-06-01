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
        backgroundColor: "rgba(0,0,0,0.05)",
        minHeight: "100vh",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <MainContainer
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {currentPage === 0 ? (
          <OptionsPage />
        ) : currentPage === 1 ? (
          <QuestionsPage />
        ) : currentPage === 2 ? (
          <CreateSession />
        ) : currentPage === 3 ? (
          <AboutPage />
        ) : currentPage === 4 ? (
          <IceBreakers />
        ) : null}
      </div>
    </div>
  );
}

export default App;
