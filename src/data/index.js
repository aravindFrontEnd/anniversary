// src/data/index.js
import { javascriptQuestions } from './javascript-questions';
import { javaQuestions } from './java-questions';
import { pythonQuestions } from './python-questions';
import { awsQuestions } from './aws-questions';

export const QUESTIONS_BY_TOPIC = {
  javascript: javascriptQuestions,
  java: javaQuestions,
  python: pythonQuestions,
  aws: awsQuestions
};

export const getQuestionsByTopic = (topic) => {
  return QUESTIONS_BY_TOPIC[topic] || javascriptQuestions;
};

// Common prize levels for all topics
export const PRIZE_LEVELS = [
  1000, 2000, 3000, 5000, 10000, 
  20000, 40000, 80000, 160000, 320000,
  640000, 1250000, 2500000, 5000000, 10000000
];