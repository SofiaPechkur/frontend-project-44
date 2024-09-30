import { getRandomNum, launchGame } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    // печать вопроса пользователю
    const question = (`Question: ${randomNumOne}`);
    console.log(question);
    // вычисление верного ответа
    if (randomNumOne < 2) {
      return 'no';
    }
    let resultCheckRandomNum = 0;
    for (let i = 2; i < randomNumOne; i += 1) {
      if (randomNumOne % i === 0) {
        resultCheckRandomNum += 1;
      }
    }
    const correctAnswer = (resultCheckRandomNum === 0 ? 'yes' : 'no');
    return correctAnswer;
  };
  launchGame(rules, getDataForLaunchGame);
};
