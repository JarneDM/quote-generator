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
			`"Why are you looking for quotes. Get to work and grind until you made it" — Me`,
			`"A year from now you will wish you had started today." — Unknown`,
			`“It's fine to celebrate success but it is more important to heed the lessons of failure.” — Bill Gates`,
			`“For the great doesn’t happen through impulse alone, and is a succession of little things that are brought together.” — Vincent van Gogh`,
			`"We can see through others only when we can see through ourselves.” — Bruce Lee`,
			`"If you don't know what port you are sailing to, then how do you know what wind is favorable." — Tren Twins`,
			`“We can’t help everyone, but everyone can help someone.” — Ronald Reagan`,
			`“Believe you can and you’re halfway there.” — Theodore Roosevelt`,
			`“The only true wisdom is in knowing you know nothing.” — Socrates`,
			`“I have a dream that one day this nation will rise up and live out the true meaning of its creed: ‘We hold these truths to be self-evident, that all men are created equal.'” — Martin Luther King Jr.`,
			`“The unexamined life is not worth living.” — Socrates`,
			`“To be or not to be, that is the question.” — William Shakespeare`,
			`“The only thing necessary for the triumph of evil is for good men to do nothing.” — Edmund Burke`
		]
	}
});

export default app;