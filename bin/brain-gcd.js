#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import { getRandomNum, getCorrectNod } from '../src/index.js';

const userName = getUserName();

const calculateNod = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const numOne = 1;
    const numTwo = 100;
    const randomNumOne = getRandomNum(numOne, numTwo);
    const randomNumTwo = getRandomNum(numOne, numTwo);
    const question = `Question: ${randomNumOne} ${randomNumTwo}`;
    console.log(question);
    const correctAnswer = getCorrectNod(randomNumOne, randomNumTwo);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
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
calculateNod();
