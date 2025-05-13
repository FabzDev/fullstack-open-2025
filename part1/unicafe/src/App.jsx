import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button';
import { Statistics } from './Statistics';
import { Positive } from './Positive';


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleOnClick = (setFunc) => () => {
    setAll(a => a + 1);
    setFunc(feedack => feedack + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="Good" handleOnClick={handleOnClick(setGood)}/>
      <Button text="Neutral" handleOnClick={handleOnClick(setNeutral)}/>
      <Button text="Bad" handleOnClick={handleOnClick(setBad)}/>
      
      <h1>Statistics</h1>
      
      {all==0 && <h2>No Feedback Given</h2>}
      {all>0 && <Statistics name="Good" value={good}/>}
      {all>0 && <Statistics name="Neutral" value={neutral}/>}
      {all>0 && <Statistics name="Bad" value={bad}/>}
      {all>0 && <Statistics name="All" value={good + neutral + bad}/>}
      {all>0 && <Positive good={good} all={all}/>}

    </>
  )
}

export default App
