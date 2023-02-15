export default function Question(props) {
  const suggestionsButtons = props.question.suggestions.map((sug, index) => (
    <button
      key={sug.text}
      onClick={
        !props.checking
          ? () => {
              //generating new sugguestions array and updating the old one
              const newSuggestions = [...props.question.suggestions];
              newSuggestions[index].checked = !newSuggestions[index].checked;
              props.updateQuestions(props.question.id, newSuggestions);
            }
          : console.log("checking mode ")
      }
      className={sug.checked ? "checked Question--button" : "Question--button"}
    >
      {sug.text /*this is the button content */}
    </button>
  ));
  return (
    <div className="Question--container">
      <h1>{props.question.body}</h1>
      {suggestionsButtons}

      <hr />
    </div>
  );
}
