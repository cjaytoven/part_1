import { useState } from 'react'

const StatisticLine = (props) => {
  return (
  <tr>
    <td>{props.text} {props.value}{props.percent}</td>
  </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
      <table>
        <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral"v alue={props.neutral} />
            <StatisticLine text="bad"v alue={props.bad} />
            <StatisticLine text="all" value={props.total} />
            <StatisticLine text="average" value={props.average} />
            <StatisticLine text="positive" value={props.positive} percent="%"/>
        </tbody>
      </table>
  )
}

const Header = props => <h2>{props.text}</h2>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} average={(good-bad)/(good+neutral+bad)} positive={(good/(good+neutral+bad)*100)}/>
    </div>
  )
}

export default App
