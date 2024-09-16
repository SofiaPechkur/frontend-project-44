#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const getRandomNum = () => {
  const minNum = Math.ceil(1);
  const maxNum = Math.floor(100);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

const userName = getUserName();

const checkParity = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const randomNum = getRandomNum();
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
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
checkParity();
