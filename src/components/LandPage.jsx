export default function LandPage(props) {
  return (
    <div className="LandPage--container">
      <img src="/yellow blob.png" className="yellowBlob" />
      <h1>Quizzical</h1>
      <p>Solve some quizes !</p>
      <button onClick={props.startQuizzing} className="LandPage--start-btn">
        Start quiz
      </button>
      <img src="/blue blobs.png" className="blueBlob" />
    </div>
  );
}
