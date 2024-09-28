import { launchGame } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const askQuestion = (randomNumOne) => {
    const result = `Question: ${randomNumOne}`;
    console.log(result);
    const paramsForFunctionGetCorrectAnswer = randomNumOne;
    return paramsForFunctionGetCorrectAnswer;
  };
  const getCorrectAnswer = (question) => {
    const randomNumOne = question;
    const result = (randomNumOne % 2 === 0 ? 'yes' : 'no');
    return result;
  };
  launchGame(rules, askQuestion, getCorrectAnswer);
};
