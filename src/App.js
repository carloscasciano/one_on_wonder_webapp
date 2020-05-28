import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage"

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
        <QuestionsPage/>
        
      ) : currentPage === 1 ? (
        <AboutPage />
      ) : currentPage === 2 ? (
        <p>Ice Breakers</p>
      ) : currentPage === 3 ? (
        <p>Create Session</p>
      ) : currentPage === 4 ? (
        <p>Menu</p>
      ) : null}
    </div>
  );
}

export default App;
