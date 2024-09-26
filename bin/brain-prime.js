#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import { getRandomNum } from '../src/index.js';

const userName = getUserName();

const isNumberSimple = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const numOne = 1;
    const numTwo = 100;
    const randomNum = getRandomNum(numOne, numTwo);
    let resultCheckRandomNum = 0;
    for (let j = 2; j < randomNum; j += 1) {
      if (randomNum % j === 0) {
        resultCheckRandomNum += 1;
      }
    }
    const correctAnswer = resultCheckRandomNum === 0 ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;
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
isNumberSimple();
