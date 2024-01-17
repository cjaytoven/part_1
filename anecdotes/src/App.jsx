import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  //changes selected anecdote
  const [selected, setSelected] = useState(0)
  //handles new votes
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  //changes most voted anecdote
  const [mostVotes, setMostVotes] = useState (0)

  //get random number, confined to length of array
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    //copy votes array
    const newVotes = [...votes]
    //add new vote
    newVotes[selected] += 1
    //set votes array to updated array
    setVotes(newVotes)

    //check if new vote brings current anecdote above most popular anecdote
    if (newVotes[selected] > votes[mostVotes]){
      //if so update most popular anecdote
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={addVote}>vote</button>
        <button onClick={randomAnecdote}>next anecdote</button>
      </div>
      <h2>Anecdote with the most votes</h2>
      <div>{anecdotes[mostVotes]}</div>
      <div>has {votes[mostVotes]} votes</div>
    </div>
  )
}

export default App