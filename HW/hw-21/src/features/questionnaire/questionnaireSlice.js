// src/features/questionnaire/questionnaireSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Какой язык программирования используется в React?',
      options: ['JavaScript', 'Python', 'Java', 'C#'],
      correctAnswer: 'JavaScript',  // Правильный ответ
    },
    {
      id: 2,
      text: 'Какая библиотека используется для управления состоянием в React?',
      options: ['React Router', 'Redux', 'Axios', 'Jest'],
      correctAnswer: 'Redux',  // Правильный ответ
    },
    {
      id: 3,
      text: 'Что такое JSX?',
      options: ['Синтаксис JavaScript', 'HTML шаблон', 'CSS', 'Специальный атрибут'],
      correctAnswer: 'Синтаксис JavaScript',  // Правильный ответ
    },
  ],
  answers: [],  // Храним выбранные ответы
  score: 0,     // Количество правильных ответов
  submitted: false, // Флаг отправки анкеты
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        // Добавляем ответ пользователя в состояние
        const existingAnswer = state.answers.find(ans => ans.questionId === questionId);
        if (existingAnswer) {
          existingAnswer.answer = answer;
        } else {
          state.answers.push({ questionId, answer });
        }
      }
    },
    submitQuiz: (state) => {
      // Подсчитываем количество правильных ответов
      let score = 0;
      state.answers.forEach(answer => {
        const question = state.questions.find(q => q.id === answer.questionId);
        if (question && answer.answer === question.correctAnswer) {
          score += 1;
        }
      });
      state.score = score; // Обновляем количество правильных ответов
      state.submitted = true; // Фиксируем, что анкета отправлена
    },
    resetQuiz: (state) => {
      state.answers = [];
      state.score = 0;
      state.submitted = false;
    },
  },
});

export const { answerQuestion, submitQuiz, resetQuiz } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
