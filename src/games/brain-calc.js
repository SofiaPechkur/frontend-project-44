import { getRandomNum, getRandomOperator, launchGame } from '../index.js';

const getCorrectAnswer = (randomNumOne, randomNumTwo, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = randomNumOne + randomNumTwo;
      break;
    case '-':
      result = randomNumOne - randomNumTwo;
      break;
    case '*':
      result = randomNumOne * randomNumTwo;
      break;
    default:
      throw new Error(`Unknown: '${randomOperator}'!`);
  }
  return result;
};

export default () => {
  const rule = 'What is the result of the expression?';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    const randomOperator = getRandomOperator();
    const question = (`Question: ${randomNumOne} ${randomOperator} ${randomNumTwo}`);
    const correctAnswer = getCorrectAnswer(randomNumOne, randomNumTwo, randomOperator);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
