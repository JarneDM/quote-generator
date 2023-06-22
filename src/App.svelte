<script>
	export let quotes;
	let random;
	const randomQuote = ()=> {
		random = Math.floor(Math.random() * quotes.length);
	}

	if (random == undefined){
		randomQuote();
	}

	if (random > 0 && quotes[random] === quotes[random - 1]) {
  		randomQuote();
	}

</script>

<main>
	<h1>Random quote of the day:</h1>
	<h2>{quotes[random]}</h2>
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