import React, { useState } from 'react'

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Heading = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Display = (props) => {
  return (
    <div>
      <p>{props.selected}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const MostVotes = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.index]}</p>
      <p>has {props.votes[props.index]} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ] 

  const n = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(n).fill(0)) // index of votes array will match index of anecdotes array
  //console.log(votes);

  const getRandomIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }



  const newAnecdote = (newIndex) => {
    setSelected(newIndex)
  }

  // need to increment number of points at given index in copy array 
  // index needs to be the same as the current value of selected
  const copy = [...votes];
  const maxIndex = copy.indexOf(Math.max(...copy));
  
  const updateVotes = () => {
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <Heading text="Anecdote of the day" />
      <Display selected={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={() => { updateVotes()}} text="vote"/>
      <Button handleClick={() => { newAnecdote(getRandomIndex(0, anecdotes.length))}} text="next anecdote"/>
      <Heading text="Anecdote with most votes"/>
      <MostVotes anecdotes={anecdotes} votes={votes} index={maxIndex}/>
    </div>
  )
}

export default App