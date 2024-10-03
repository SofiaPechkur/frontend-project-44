import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const number = getRandomNum();
    const question = (`Question: ${number}`);
    const correctAnswer = getCorrectAnswer(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  launchGame(rule, getDataForLaunchGame);
};
