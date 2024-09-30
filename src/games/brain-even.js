import { getRandomNum, launchGame } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    // печать вопроса пользователю
    const question = (`Question: ${randomNumOne}`);
    console.log(question);
    // вычисление верного ответа
    const correctAnswer = (randomNumOne % 2 === 0 ? 'yes' : 'no');
    return correctAnswer;
  };
  launchGame(rules, getDataForLaunchGame);
};
