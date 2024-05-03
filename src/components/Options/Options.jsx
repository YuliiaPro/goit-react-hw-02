import css from "./Options.module.css";

export default function Options({ options, totalFeedback, handleReset }) {
  return (
    <div className={css.container}>
      <button onClick={() => options("good")}>Good</button>
      <button onClick={() => options("neutral")}>Neutral</button>
      <button onClick={() => options("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
