// src/components/Question.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import { Card, Button } from 'antd';
import '../styles/Question.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.questionnaire.answers);

  // Находим ответ пользователя для текущего вопроса
  const userAnswer = answers.find(ans => ans.questionId === question.id)?.answer;
  
  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <Card title={question.text} style={{ marginBottom: 20 }}>
      {question.options.map(option => (
        <Button
          key={option}
          block
          onClick={() => handleAnswer(option)}
          style={{
            marginBottom: '10px',
            fontSize: '16px',
            backgroundColor: userAnswer === option ? '#4CAF50' : '#1890ff',
            color: 'white',
            borderColor: userAnswer === option ? '#4CAF50' : '#1890ff',
          }}
        >
          {option}
        </Button>
      ))}
    </Card>
  );
};

export default Question;
