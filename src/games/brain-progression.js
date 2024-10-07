import { getRandomNum, launchGame } from '../index.js';

const getProgression = (step) => {
  const lengthProgression = 10;
  const progression = [];
  let nextNumber = 0;
  for (let i = 0; i <= lengthProgression - 1; i += 1) {
    nextNumber += step;
    progression.push(nextNumber);
  }
  return progression;
};

export default () => {
  const rule = 'What number is missing in the progression?';
  const getDataForLaunchGame = () => {
    const step = getRandomNum();
    const hiddenIn = getRandomNum(1, 8);
    const progression = getProgression(step);
    const correctAnswer = progression[hiddenIn];
    progression[hiddenIn] = '..';
    const question = (`Question: ${progression.join(' ')}`);
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
