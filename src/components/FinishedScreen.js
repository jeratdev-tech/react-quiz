const FinishedScreen = ({
  points,
  maxPossiblePoints,
  index,
  numQuestions,
  Highscore,
  dispatch,
}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥳";
  else if (percentage >= 80) emoji = "😎";
  else if (percentage >= 50) emoji = "😐";
  else if (percentage >= 20) emoji = "😞";

  if (index < numQuestions - 1)
    return (
      <>
        <p className="result">
          <span>{emoji}</span>You scored <stong>{points}</stong> out of{" "}
          {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
        <p className="highscore">(Highscore: {Highscore} points)</p>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart quiz
        </button>
      </>
    );
};

export default FinishedScreen;
