import { useEffect, useState } from "react";
import Question from "./Question";

export default function Questions(props) {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions"))
  );
  const questionsElements = questions.map((question) => (
    <Question
      question={question}
      key={question.id}
      updateQuestions={updateQuestions}
    />
  ));
  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    //updates the local storage evrey time the questions are updated
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);
  //////////////////////////////////////////////////////////////

  function updateQuestions(questionId, suggestions) {
    //searching for the question to update using the body as a ref
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id === questionId) {
        setQuestions((prevQuestions) => {
          const newQustions = [...prevQuestions];
          newQustions[i].suggestions = suggestions;
          return newQustions;
        });
      }
    }
  }
  //////////////////////////////////////////////////

  return (
    <div className="Questions-container">
      <img src="/yellow blob.png" className="yellowBlob" />
      {questionsElements}
      <button
        className="Questions--checkBtn"
        onClick={() => props.setChecking(true)}
      >
        Check Answers
      </button>
      <img src="/blue blobs.png" className="blueBlob" />
    </div>
  );
}
