#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import { getRandomNum, getRandomOperators } from '../src/index.js';

const userName = getUserName();

const calculateNumber = () => {
  const rules = 'What is the result of the expression?';
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const numOne = 1;
    const numTwo = 100;
    const randomStrNumOne = getRandomNum(numOne, numTwo);
    const randomStrNumTwo = getRandomNum(numOne, numTwo);
    const randomNumOne = Number(randomStrNumOne);
    const randomNumTwo = Number(randomStrNumTwo);
    const randomOperator = getRandomOperators();
    const expression = (`${randomStrNumOne} ${randomOperator} ${randomStrNumTwo}`);
    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = randomNumOne + randomNumTwo;
        break;
      case '-':
        correctAnswer = randomNumOne - randomNumTwo;
        break;
      case '*':
        correctAnswer = randomNumOne * randomNumTwo;
        break;
      default:
        console.log(null);
    }
    correctAnswer = String(correctAnswer);
    const question = `Question: ${expression}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      const coincidence = 'Correct!';
      console.log(coincidence);
      if (i === round) {
        const finalWords = (`Congratulations, ${userName}!`);
        console.log(finalWords);
      }
    } else {
      const wrongAnswer = (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      console.log(wrongAnswer);
      break;
    }
  }
};
calculateNumber();
