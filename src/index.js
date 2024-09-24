export const getRandomNum = (numOne, numTwo) => {
  const minNum = Math.ceil(numOne);
  const maxNum = Math.floor(numTwo);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

export const getRandomOperators = () => {
  const operators = ['+', '-', '*'];
  const operatorOne = 0;
  const operatorLast = 2;
  const randomNum = getRandomNum(operatorOne, operatorLast);
  return operators[randomNum];
};
