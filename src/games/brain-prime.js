import { launchGame } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const askQuestion = (randomNumOne) => {
    const result = (`Question: ${randomNumOne}`);
    console.log(result);
    const paramsForFunctionGetCorrectAnswer = randomNumOne;
    return paramsForFunctionGetCorrectAnswer;
  };
  const getCorrectAnswer = (question) => {
    const randomNumOne = question;
    if (randomNumOne < 2) {
      return 'no';
    }
    let resultCheckRandomNum = 0;
    for (let i = 2; i < randomNumOne; i += 1) {
      if (randomNumOne % i === 0) {
        resultCheckRandomNum += 1;
      }
    }
    const result = (resultCheckRandomNum === 0 ? 'yes' : 'no');
    return result;
  };
  launchGame(rules, askQuestion, getCorrectAnswer);
};
