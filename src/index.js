import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export const getRandomNum = (minNumber = 1, maxNumber = 10) => {
  const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomNum;
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorOne = 0;
  const operatorLast = (operators.length - 1);
  const randomNum = getRandomNum(operatorOne, operatorLast);
  return operators[randomNum];
};

export const launchGame = (rules, getDataForLaunchGame) => {
  const userName = getUserName();
  console.log(rules);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const correctAnswer = getDataForLaunchGame();
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
