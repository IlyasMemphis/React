import React, { useState } from 'react'
import Answer from './Answer'

const MathQuiz = () => {
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState(generateQuestion())

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    return { a, b, answer: a + b }
  }

  const handleAnswer = userAnswer => {
    if (parseInt(userAnswer) === question.answer) {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
    setQuestion(generateQuestion())
  }

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>
        Сколько будет {question.a} + {question.b}?
      </p>
      <Answer onAnswer={handleAnswer} />
      <p>Ваш счёт: {score}</p>
    </div>
  )
}

export default MathQuiz
