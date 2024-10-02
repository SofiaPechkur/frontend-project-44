import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (randomNumOne) => {
  if (randomNumOne < 2) {
    return 'no';
  }
  let resultCheckRandomNum = 0;
  for (let i = 2; i < randomNumOne; i += 1) {
    if (randomNumOne % i === 0) {
      resultCheckRandomNum += 1;
    }
  }
  return (resultCheckRandomNum === 0 ? 'yes' : 'no');
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const question = (`Question: ${randomNumOne}`);
    const correctAnswer = getCorrectAnswer(randomNumOne);
    return [question, correctAnswer];
  };
  launchGame(rule, getDataForLaunchGame);
};
