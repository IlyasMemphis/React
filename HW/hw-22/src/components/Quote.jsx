// src/components/Quote.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../features/quote/quoteSlice';
import styles from './Quote.module.css';

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const { text, author, status, error } = quote;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuote()); // Получаем цитату при первом рендере
    }
  }, [dispatch, status]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайная цитата</h1>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className={styles.quote}>
          <p className={styles.text}>"{text}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        Получить новую цитату
      </button>
    </div>
  );
};

export default Quote;
