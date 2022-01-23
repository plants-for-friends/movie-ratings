<script>
	import Header from '$lib/header/Header.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Map from '$lib/map/map.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->
	<Navbar/>

<main>
	<slot />
</main>

<footer>
	<Footer/>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
