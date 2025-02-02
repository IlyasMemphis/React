import React, { useState } from 'react'

const Answer = ({ onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onAnswer(userAnswer)
    setUserAnswer('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        value={userAnswer}
        onChange={e => setUserAnswer(e.target.value)}
        placeholder='Ваш ответ'
      />
      <button type='submit'>Ответить</button>
    </form>
  )
}

export default Answer
