import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		quotes: [
			`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
		 	`“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
			`“When you change your thoughts, remember to also change your world.” — Norman Vincent Peale`,
			`“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs`,
			`“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown `,
			`“I’m a greater believer in luck, and I find the harder I work the more I have of it.” — Thomas Jefferson`,
			`“The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.” — Unknown`,
			`“Try not to become a man of success, but rather become a man of value.” – Albert Einstein`,
			`“Success is stumbling from failure to failure with no loss of enthusiasm.” ― Winston Churchill`,
			`“Get a good idea and stay with it. Dog it, and work at it until it’s done right.” — Walt Disney`,
			`“Work until your bank account looks like a phone number.” — Unknown`,
			`“Coming together is a beginning. Keeping together is progress. Working together is success.” — Henry Ford`,
			`“When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…” – Marcus Aurelius`,
			`“Be sure you put your feet in the right place, then stand firm.” ― Abraham Lincoln`,
			`“Life is like riding a bicycle. To keep your balance you must keep moving.” — Albert Einstein`,
			`"Why are you looking for quotes. Get to work and grind until you made it" — Me`
		]
	}
});

export default app;