import readlineSync from 'readline-sync';

export const getRandomNum = (minNumber = 1, maxNumber = 10) => {
  const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomNum;
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorOne = 0;
  const operatorLast = (operators.length - 1);
  const randomNum = getRandomNum(operatorOne, operatorLast);
  return operators[randomNum];
};

export const launchGame = (rule, getDataForLaunchGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const [question, correctAnswer] = getDataForLaunchGame();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
