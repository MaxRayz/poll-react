import React, { useState } from 'react'
import PollOption from './PollOption'
import './App.css'

const App = () => {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Fish', count: 0 },
    { option: 'Pig', count: 0 },
    { option: 'Bird', count: 0 },
    { option: 'Guinea Pig', count: 0 },
    { option: 'Hamster', count: 0 },
    { option: 'Human(???)', count: 0 }
  ])

  const handleVote = (index) => {
    const newOptions = [...options]
    newOptions[index].count += 1
    setOptions(newOptions)
  }

  const getLeader = () => {
    return options.reduce((prev, current) => {
      return (prev.count > current.count) ? prev : current
    })
  }

  const leader = getLeader()

  return (
    <div className="container">
      <h1>Mini Poll React App</h1>
      <p id='question'>What pet is the best?</p>
      {options.map((option, index) => (
        <PollOption 
          key={index} 
          label={option.option} 
          count={option.count} 
          onVote={() => handleVote(index)} 
        />
      ))}
      <h2>Current Leader: {leader.option} with <span>{leader.count}</span> votes</h2>
    </div>
  )
}

export default App