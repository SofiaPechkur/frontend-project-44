import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (randomNumOne, randomNumTwo) => {
  let greatestNum;
  let smallestNum;
  let result;
  if (randomNumOne > randomNumTwo) {
    greatestNum = randomNumOne;
    smallestNum = randomNumTwo;
  } else {
    greatestNum = randomNumTwo;
    smallestNum = randomNumOne;
  }
  if (greatestNum % smallestNum === 0) {
    return smallestNum;
  }
  for (let divisor = (smallestNum - 1); divisor > 0; divisor -= 1) {
    if (greatestNum % divisor === 0 && smallestNum % divisor === 0) {
      result = divisor;
      break;
    }
  }
  return result;
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    const question = `Question: ${randomNumOne} ${randomNumTwo}`;
    const correctAnswer = getCorrectAnswer(randomNumOne, randomNumTwo);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
