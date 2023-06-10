import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} mutable={setGood} text='good' />
      <Button value={neutral} mutable={setNeutral} text='netural' />
      <Button value={bad} mutable={setBad} text='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
