import { getRandomNum, launchGame } from '../index.js';

const getCorrectAnswer = (randomNumOne, randomNumTwo) => {
  const lengthProgression = 10;
  const progression = [];
  let nextNumber = 0;
  let correctAnswer = 0;
  for (let i = 1; i <= lengthProgression; i += 1) {
    if (i === randomNumOne) {
      nextNumber += randomNumTwo;
      correctAnswer = nextNumber;
      progression.push('..');
    } else {
      nextNumber += randomNumTwo;
      progression.push(nextNumber);
    }
  }
  const progressionFinal = progression.join(' ');
  return [progressionFinal, correctAnswer];
};

export default () => {
  const rule = 'What number is missing in the progression?';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    const [progressionFinal, correctAnswer] = getCorrectAnswer(randomNumOne, randomNumTwo);
    const question = `Question: ${progressionFinal}`;
    return [question, String(correctAnswer)];
  };
  launchGame(rule, getDataForLaunchGame);
};
