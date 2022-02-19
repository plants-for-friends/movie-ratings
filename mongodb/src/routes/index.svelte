<script context="module">
	export const prerender = true;
</script>

<script>
	// import Counter from '$lib/Counter.svelte';

</script>

<svelte:head>
	<title>Todos </title>
</svelte:head>

<section>

	<main> 
		<h1>My Todos</h1>
	</main>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

</style>
