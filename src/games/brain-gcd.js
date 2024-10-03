import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (numberOne, numberTwo) => {
  const greatestNum = Math.max(numberOne, numberTwo);
  const smallestNum = Math.min(numberOne, numberTwo);
  if (greatestNum % smallestNum === 0) {
    return smallestNum;
  }
  for (let divisor = (smallestNum - 1); divisor > 1; divisor -= 1) {
    if (greatestNum % divisor === 0 && smallestNum % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const getDataForLaunchGame = () => {
    const numberOne = getRandomNum();
    const numberTwo = getRandomNum();
    const question = `Question: ${numberOne} ${numberTwo}`;
    const correctAnswer = getCorrectAnswer(numberOne, numberTwo);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
