import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (number) => (number % 2 === 0);

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const number = getRandomNum();
    const question = (`Question: ${number}`);
    const correctAnswer = getCorrectAnswer(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  launchGame(rule, getDataForLaunchGame);
};
