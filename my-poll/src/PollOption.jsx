import React from 'react'

const PollOption = ({ label, count, onVote }) => {
  return (
    <div>
      <p>{label}: {count} votes</p>
      <button onClick={onVote}>Vote</button>
    </div>
  )
}

export default PollOption