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
    <div>
        <MainContainer
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {currentPage === 0 ? (
          <AboutPage />
        ) : currentPage === 1 ? (
          <QuestionsPage />
        ) : currentPage === 2 ? (
          <CreateSession />
        ) : currentPage === 3 ? (
          <OptionsPage />
        ) : currentPage === 4 ? (
          <IceBreakers />
        ) : null}
      
    </div>
  );
}

export default App;
