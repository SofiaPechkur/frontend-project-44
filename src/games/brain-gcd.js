import { getRandomNum, launchGame } from '../index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getDataForLaunchGame = () => {
    const randomNumOne = getRandomNum();
    const randomNumTwo = getRandomNum();
    // печать вопроса пользователю
    const question = `Question: ${randomNumOne} ${randomNumTwo}`;
    console.log(question);
    // вычисление верного ответа
    const nums = [randomNumOne, randomNumTwo];
    const calculateDividers = (acc, num) => {
      for (let devider = 1; devider <= num; devider += 1) {
        if (num % devider === 0) {
          acc.push(devider);
        }
      }
      return acc;
    };
    const dividers = nums.reduce(calculateDividers, []);
    const sortDividers = dividers.sort((a, b) => b - a);
    let dividerFinal = 0;
    for (let i = 0; i < sortDividers.length; i += 1) {
      if (sortDividers[i] === sortDividers[i + 1]) {
        dividerFinal += sortDividers[i];
        break;
      }
    }
    return dividerFinal;
  };
  launchGame(rules, getDataForLaunchGame);
};
