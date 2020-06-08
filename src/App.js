import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import MainContainer from "./components/MainContainer";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage";
/* import IceBreakers from "./pages/IceBreakers"; */
import CreateSession from "./pages/CreateSession";
import OptionsPage from "./pages/OptionsPage";
import { getUserBrowserLanguage } from "./assets/code_logic/getUserBrowserLanguage";
import { getUserLanguagePack } from "./assets/code_logic/getUserLanguagePack";
import { getRawQuestionsData } from "./fetchData/fetchQuestions";

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview("/");
}
initializeReactGA();

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(getUserLanguagePack);
  const [currentLanguageCode, setCurrentLanguageCode] = useState(
    getUserBrowserLanguage()
  );
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const questionsData = getRawQuestionsData(currentLanguageCode);
    questionsData.then(function (value) {
      if (isMounted === true) {
        const qData = [...value];
        setQuestions(qData);
        return qData;
      }
    });
    return () => (isMounted = false);
  }, [currentLanguageCode]);

  const handlePageChange = ({ activeTabIndex, event }) => {
    setCurrentPage(activeTabIndex);
  };

  /* GA HANDLERS */
  const GAhandlerQuickQuestion = () => {
    ReactGA.event({
      category: "Random Question",
      action: "Get a Random Question",
    });
  };

  const GAhandlerEnterQuestionsModalOnSessionMenu = () => {
    ReactGA.event({
      category: "Open Questions Modal",
      action: "Entered Modal Menu",
    });
  };

  const GAhandlerUsedCopyToClipboard = () => {
    ReactGA.event({
      category: "Clipboard",
      action: "Used Clipboard",
    });
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
          <CreateSession
            currentLanguage={currentLanguage}
            questions={questions}
            GAhandlerEnterQuestionsModalOnSessionMenu={
              GAhandlerEnterQuestionsModalOnSessionMenu
            }
            GAhandlerUsedCopyToClipboard={GAhandlerUsedCopyToClipboard}
          />
        ) : currentPage === 1 ? (
          <QuestionsPage
            currentLanguage={currentLanguage}
            questions={questions}
            GAhandlerQuickQuestion={GAhandlerQuickQuestion}
          />
        ) : currentPage === 2 ? (
          <OptionsPage
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            setCurrentLanguageCode={setCurrentLanguageCode}
          />
        ) : currentPage === 3 ? (
          <AboutPage currentLanguage={currentLanguage} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
