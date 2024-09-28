import { launchGame } from '../index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const askQuestion = (randomNumOne, randomNumTwo) => {
    const result = `Question: ${randomNumOne} ${randomNumTwo}`;
    console.log(result);
    const paramsForFunctionGetCorrectAnswer = [randomNumOne, randomNumTwo];
    return paramsForFunctionGetCorrectAnswer;
  };
  const getCorrectAnswer = (question) => {
    const nums = question;
    const dividers = [];
    for (let j = 0; j < nums.length; j += 1) {
      const num = nums[j];
      for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) {
          dividers.push(i);
        }
      }
    }
    const dividersSort = dividers.sort((a, b) => b - a);
    let dividerFinal = 0;
    for (let i = 0; i < dividersSort.length; i += 1) {
      if (dividersSort[i] === dividersSort[i + 1]) {
        dividerFinal += dividersSort[i];
        break;
      }
    }
    return dividerFinal;
  };
  launchGame(rules, askQuestion, getCorrectAnswer);
};
