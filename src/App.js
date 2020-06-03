import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage";
import IceBreakers from "./pages/IceBreakers";
import CreateSession from "./pages/CreateSession";
import OptionsPage from "./pages/OptionsPage";
import {getUserBrowserLanguage} from "./assets/code_logic/getUserBrowserLanguage"
import {getUserLanguagePack} from "./assets/code_logic/getUserLanguagePack"


function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(getUserLanguagePack);
  const [currentLanguageCode, setCurrentLanguageCode] = useState(getUserBrowserLanguage());
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
          currentLanguage={currentLanguage}
        />

        {currentPage === 0 ? (
          <AboutPage currentLanguage={currentLanguage} />
        ) : currentPage === 1 ? (
          <QuestionsPage
            currentLanguage={currentLanguage}
            currentLanguageCode={currentLanguageCode}
          />
        ) : currentPage === 2 ? (
          <CreateSession currentLanguage={currentLanguage} />
        ) : currentPage === 3 ? (
          <OptionsPage
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            setCurrentLanguageCode={setCurrentLanguageCode}
          />
        ) : currentPage === 4 ? (
          <IceBreakers />
        ) : null}
      </div>
    </div>
  );
}

export default App;
