export default function CheckedQuestions(props) {
  //////////////////////////////////
  const suggestionsButtons = props.question.suggestions.map((sug) => (
    //suggestions is an array of suggestions objects
    //sug is an object representing one suggestion
    <button
      key={sug.text}
      className={
        sug.checked && !sug.correct
          ? "not-correct Question--button"
          : sug.correct
          ? "correct Question--button"
          : "Question--button"
      }
    >
      {sug.text /*this is the button content */}
    </button>
  ));
  /////////////////////////////////////
  return (
    <div className="Question--container">
      <h1>{props.question.body}</h1>
      {suggestionsButtons}
      <hr />
    </div>
  );
}
