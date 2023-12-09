//https://testing-library.com/docs/react-testing-library/api
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test('Test: Check if question renders properly (Q1) ', () => {
  const { getByText } = render(<App />);
  const questionText = getByText(/Which company uses this mascot for their games?/i);
  expect(questionText).toBeInTheDocument();
});

test('Test: Button pressing flips to next question (Q1 to Q2)', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/Valve/i));

  const nextQuestionText = getByText(/What is this character's name?/i);
  expect(nextQuestionText).toBeInTheDocument();
});

test('Test: Score page display and indirect test of scoring', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText(/Epic Games/i)); //Wrong
  fireEvent.click(getByText(/Pikachu/i)); //Wrong
  fireEvent.click(getByText(/Yes/i)); //Right
  fireEvent.click(getByText(/Yes/i)); //Right
  fireEvent.click(getByText(/Rayman/i)); //Right
  fireEvent.click(getByText(/I am enjoying this quiz/i)); //Right
  fireEvent.click(getByText(/I disagree./i)); //Wrong
  fireEvent.click(getByText(/Sometimes/i)); //Right
  fireEvent.click(getByText(/He was having fun/i)); //Wrong
  fireEvent.click(getByText(/Yes/i)); //Wrong

  //Expected score: 5/10 & Expected text:
  const finalScoreText = getByText(/Score: 5 out of 10. Refresh to try again!/i);
  expect(finalScoreText).toBeInTheDocument();
});
