import { getRandomNum, getRandomOperator, launchGame } from '../index.js';

const getCorrectAnswer = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Unknown: '${operator}'!`);
  }
};

export default () => {
  const rule = 'What is the result of the expression?';
  const getDataForLaunchGame = () => {
    const numberOne = getRandomNum();
    const numberTwo = getRandomNum();
    const operator = getRandomOperator();
    const question = (`Question: ${numberOne} ${operator} ${numberTwo}`);
    const correctAnswer = getCorrectAnswer(numberOne, numberTwo, operator);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
