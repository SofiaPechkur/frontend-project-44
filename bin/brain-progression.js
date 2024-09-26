#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import { getRandomNum } from '../src/index.js';

const userName = getUserName();

const defineNumber = () => {
  const rules = 'What number is missing in the progression?';
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const numOne = 2;
    const numTwo = 10;
    const numIntervalOne = 2;
    const numIntervalTwo = 5;
    const randomNum = getRandomNum(numOne, numTwo);
    const randomNumInterval = getRandomNum(numIntervalOne, numIntervalTwo);
    const lengthProgression = 10;
    const progression = [];
    let nextNumber = 0;
    let correctAnswer;
    for (let j = 1; j <= lengthProgression; j += 1) {
      if (j === 1) {
        nextNumber += randomNum;
      } else if (j === randomNum) {
        nextNumber += randomNumInterval;
        correctAnswer = nextNumber;
        progression.push('..');
      } else {
        nextNumber += randomNumInterval;
        progression.push(nextNumber);
      }
    }
    const progressionFinal = progression.join(' ');
    const question = `Question: ${progressionFinal}`;
    console.log(question);
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
defineNumber();
