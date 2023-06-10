import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="netural" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average === 0 ? 0 : average} />
      <StatisticLine text="positive" value={positive === 0 ? 0 : positive} />
    </div>
  );
};

export default Statistics;
