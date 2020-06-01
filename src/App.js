import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage";
import IceBreakers from "./pages/IceBreakers"
import CreateSession from "./pages/CreateSession"
import OptionsPage from "./pages/OptionsPage"

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ activeTabIndex, event }) => {
    setCurrentPage(activeTabIndex);
  };

  return (
    <div className="App">
      <MainContainer
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {currentPage === 0 ? (
        <OptionsPage />
        
        
        
        
      ) : currentPage === 1 ? (
        <QuestionsPage />
        
      ) : currentPage === 2 ? (
        <IceBreakers />
        
      ) : currentPage === 3 ? (
        <CreateSession />
      ) : currentPage === 4 ? (
        <AboutPage />
      ) : null}
    </div>
  );
}

export default App;
