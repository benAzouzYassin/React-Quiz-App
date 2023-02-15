import CheckedQuestions from "./CheckedQuestions";

export default function Checking(props) {
  const questions = JSON.parse(localStorage.getItem("questions"));
  const questionsElements = questions.map((question) => (
    <CheckedQuestions question={question} key={question.id} checking={true} />
  ));
  return (
    <>
      <div className="Questions-container">
        <img src="/yellow blob.png" className="yellowBlob" />
        {questionsElements}
        <button
          className="Questions--checkBtn"
          onClick={() => props.resetTheGame()}
        >
          Finish the game
        </button>
        <img src="/blue blobs.png" className="blueBlob" />
      </div>
    </>
  );
}
