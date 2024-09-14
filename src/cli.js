import readlineSync from 'readline-sync';

export const sayGreeting = () => {
	const userWelcome = 'Welcome to the Brain Games!';
	console.log(userWelcome);
	const userName = readlineSync.question('May I have your name? ');
	const result = (`Hello, ${userName}!`);
	console.log(result);
}