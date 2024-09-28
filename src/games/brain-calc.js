import { getRandomOperator, launchGame } from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const askQuestion = (randomNumOne, randomNumTwo) => {
    const randomOperator = getRandomOperator();
    const result = (`Question: ${randomNumOne} ${randomOperator} ${randomNumTwo}`);
    console.log(result);
    const paramsForFunctionGetCorrectAnswer = [randomNumOne, randomNumTwo, randomOperator];
    return paramsForFunctionGetCorrectAnswer;
  };
  const getCorrectAnswer = (question) => {
    const randomNumOne = question[0];
    const randomNumTwo = question[1];
    const randomOperator = question[2];
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
        console.log(null);
    }
    return result;
  };
  launchGame(rules, askQuestion, getCorrectAnswer);
};
