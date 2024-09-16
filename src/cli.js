import readlineSync from 'readline-sync';

const getUserName = () => {
  const userWelcome = 'Welcome to the Brain Games!';
  console.log(userWelcome);
  const userName = readlineSync.question('May I have your name? ');
  const result = (`Hello, ${userName}!`);
  console.log(result);
  return userName;
};
export default getUserName;
