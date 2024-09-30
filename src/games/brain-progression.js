import { getRandomNum, launchGame } from '../index.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    // определение прогресии и вычисление верного ответа
    const lengthProgression = 10;
    const progression = [];
    let nextNumber = 0;
    let correctAnswer = 0;
    for (let i = 1; i <= lengthProgression; i += 1) {
      if (i === 1) {
        nextNumber += randomNumOne;
        progression.push(nextNumber);
      }
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
    // печать вопроса пользователю
    const question = `Question: ${progressionFinal}`;
    console.log(question);
    // возврат верного ответа
    return correctAnswer;
  };
  launchGame(rules, getDataForLaunchGame);
};
