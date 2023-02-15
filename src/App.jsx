import { useEffect, useState } from "react";
import LandPage from "./components/LandPage.jsx";
import "./App.css";
import Questions from "./components/Questions.jsx";
import Checking from "./components/Checking.jsx";
import questionsData from "./questionsData.js";
function App() {
  const [checking, setChecking] = useState(false);
  const [isQuizzing, setIsQuizzing] = useState(false);
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questionsData));
  }, []);

  return (
    <>
      {!isQuizzing && (
        <LandPage
          startQuizzing={() => {
            setIsQuizzing(true);
          }}
        />
      )}
      {isQuizzing && !checking && <Questions setChecking={setChecking} />}
      {checking && (
        <Checking
          resetTheGame={() => {
            localStorage.setItem("questions", JSON.stringify(questionsData));
            setChecking(false);
            setIsQuizzing(false);
          }}
        />
      )}
    </>
  );
}

export default App;
