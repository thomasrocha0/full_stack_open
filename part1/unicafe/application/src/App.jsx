import { useState } from 'react'

const Statistics = ({stats}) => {
  if (stats.good + stats.bad + stats.neutral === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text={'good'} value={stats.good}/>
        <StatisticsLine text={'neutral'} value={stats.neutral}/>
        <StatisticsLine text={'bad'} value={stats.bad}/>
        <StatisticsLine text={'average'} value={(stats.good - stats.bad) / (stats.good + stats.neutral + stats.bad)}/>
        <StatisticsLine text={'positive'} value={(stats.good / (stats.good + stats.neutral + stats.bad) * 100).toString() + " %"}/>
      </table>
    </>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tr><td>{text}</td><td>{value}</td></tr>
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={'good'}/>
      <Button onClick={handleNeutral} text={'neutral'}/>
      <Button onClick={handleBad} text={'bad'}/>
      <Statistics stats={stats}/>
    </div>
  )
}

export default App