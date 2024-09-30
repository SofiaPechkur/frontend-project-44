import { getRandomNum, getRandomOperator, launchGame } from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    const randomOperator = getRandomOperator();
    // печать вопроса пользователю
    const question = (`Question: ${randomNumOne} ${randomOperator} ${randomNumTwo}`);
    console.log(question);
    // вычисление верного ответа
    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = randomNumOne + randomNumTwo;
        break;
      case '-':
        correctAnswer = randomNumOne - randomNumTwo;
        break;
      case '*':
        correctAnswer = randomNumOne * randomNumTwo;
        break;
      default:
        console.log(null);
    }
    return correctAnswer;
  };
  launchGame(rules, getDataForLaunchGame);
};
