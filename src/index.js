export const getRandomNum = (numOne, numTwo) => {
  const minNum = Math.ceil(numOne);
  const maxNum = Math.floor(numTwo);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorOne = 0;
  const operatorLast = 2;
  const randomNum = getRandomNum(operatorOne, operatorLast);
  return operators[randomNum];
};

export const getCorrectNod = (...nums) => {
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
