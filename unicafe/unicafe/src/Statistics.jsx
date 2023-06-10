import React from "react";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad}</p>
      <p>all {all}</p>
      <p>average{average === 0 ? "0" : average} </p>
      <p>positive {positive === 0 ? "0" : positive}%</p>
    </div>
  );
};

export default Statistics;
