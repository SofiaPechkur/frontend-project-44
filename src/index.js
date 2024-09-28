import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export const getRandomNum = (numOne, numTwo) => {
  const minNum = Math.ceil(numOne);
  const maxNum = Math.floor(numTwo);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorOne = 0;
  const operatorLast = 2;
  const randomNum = getRandomNum(operatorOne, operatorLast);
  return operators[randomNum];
};

export const launchGame = (rules, askQuestion, getCorrectAnswer) => {
  const userName = getUserName();
  console.log(rules);
  const round = 3;
  const numOneForRandom = 1;
  const numTwoForRandom = 10;
  for (let i = 1; i <= round; i += 1) {
    const randomNumOne = getRandomNum(numOneForRandom, numTwoForRandom);
    const randomNumTwo = getRandomNum(numOneForRandom, numTwoForRandom);
    const question = askQuestion(randomNumOne, randomNumTwo);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
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
