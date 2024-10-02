import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (randomNumOne) => {
  const result = (randomNumOne % 2 === 0 ? 'yes' : 'no');
  return result;
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const question = (`Question: ${randomNumOne}`);
    const correctAnswer = getCorrectAnswer(randomNumOne);
    return [question, correctAnswer];
  };
  launchGame(rule, getDataForLaunchGame);
};
