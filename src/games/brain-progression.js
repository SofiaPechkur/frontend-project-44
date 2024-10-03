import { getRandomNum, launchGame } from '../index.js';

const getProgression = (step, hiddenIn) => {
  const lengthProgression = 10;
  const progression = [];
  let nextNumber = 0;
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    nextNumber += step;
    if (i === hiddenIn) {
      progression.push('..');
    } else {
      progression.push(nextNumber);
    }
  }
  return progression;
};

const getCorrectAnswer = (progression, step, hiddenIn) => (progression[hiddenIn + 1] - step);

export default () => {
  const rule = 'What number is missing in the progression?';
  const getDataForLaunchGame = () => {
    const step = getRandomNum();
    const hiddenIn = getRandomNum(1, 8);
    const progression = getProgression(step, hiddenIn);
    const correctAnswer = getCorrectAnswer(progression, step, hiddenIn);
    const question = (`Question: ${progression.join(' ')}`);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
