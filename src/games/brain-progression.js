import { launchGame } from '../index.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const askQuestion = (randomNumOne, randomNumTwo) => {
    const lengthProgression = 10;
    const progression = [];
    let nextNumber = 0;
    let correctNumber = 0;
    for (let i = 1; i <= lengthProgression; i += 1) {
      if (i === 1) {
        nextNumber += randomNumOne;
        progression.push(nextNumber);
      }
      if (i === randomNumOne) {
        nextNumber += randomNumTwo;
        correctNumber = nextNumber;
        progression.push('..');
      } else {
        nextNumber += randomNumTwo;
        progression.push(nextNumber);
      }
    }
    const progressionFinal = progression.join(' ');
    const result = `Question: ${progressionFinal}`;
    console.log(result);
    const paramsForFunctionGetCorrectAnswer = correctNumber;
    return paramsForFunctionGetCorrectAnswer;
  };
  const getCorrectAnswer = (question) => {
    const correctNumber = question;
    return correctNumber;
  };
  launchGame(rules, askQuestion, getCorrectAnswer);
};
