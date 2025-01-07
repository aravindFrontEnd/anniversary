// src/data/questionsByTopic.js
import { javascriptQuestions } from './javascript-questions';
import { javaQuestions } from './java-questions';
import { pythonQuestions } from './python-questions';
import { awsQuestions } from './aws-questions';

export const getQuestionsByTopic = (topic) => {
  switch (topic) {
    case 'javascript':
      return javascriptQuestions;
    case 'java':
      return javaQuestions;
    case 'python':
      return pythonQuestions;
    case 'aws':
      return awsQuestions;
    default:
      return javascriptQuestions; 
  }
};