<script>
	export let quotes;
let previousRandom;
let currentRandom;

const randomQuote = () => {
  currentRandom = Math.floor(Math.random() * quotes.length);
  // console.log(currentRandom);
  if (currentRandom === previousRandom) {
    // If the current random number is the same as the previous one,
    // generate a new random number until they are different.
    while (currentRandom === previousRandom) {
      currentRandom = Math.floor(Math.random() * quotes.length);
    }
  }
  previousRandom = currentRandom;
  // console.log(quotes[currentRandom]);
};

// Call the randomQuote function to generate the initial quote
randomQuote();


</script>

<main>
	<h2>QUOTES: {quotes.length}</h2>
	<h1>Random quote of the day:</h1>
	<h2>{quotes[currentRandom]}</h2>
	<button class="refresh" id="refresh" on:click={randomQuote}>Change</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 100vh;
	}

	h1 {
		color: #39d374;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin-bottom: 1em;
	}

	h2 {
		width: 100%;
		max-width: 450px; 
		color: white;
	}


	.refresh {
		border-radius: 10px;
		border: 2px solid #39d374;
		height: 50px;
		width: 100px;
		margin-top: 5%;
		cursor: pointer;
	}

	.refresh:hover{
		background-color: lightgrey;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>