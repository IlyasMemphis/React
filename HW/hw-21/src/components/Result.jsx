// src/components/Result.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const Result = () => {
  const score = useSelector(state => state.questionnaire.score);
  const totalQuestions = useSelector(state => state.questionnaire.questions.length);

  return (
    <Card title="Результат" style={{ marginTop: '20px' }}>
      <h2>Количество правильных ответов: {score} из {totalQuestions}</h2>
    </Card>
  );
};

export default Result;
