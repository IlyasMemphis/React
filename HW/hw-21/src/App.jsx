// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuiz } from './features/questionnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnaire.questions);
  const answers = useSelector(state => state.questionnaire.answers);
  const score = useSelector(state => state.questionnaire.score);
  const submitted = useSelector(state => state.questionnaire.submitted);

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Анкета</h1>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
      {!submitted && (
        <button
          onClick={handleSubmit}
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Отправить
        </button>
      )}
      {submitted && <Result />}
    </div>
  );
};

export default App;
