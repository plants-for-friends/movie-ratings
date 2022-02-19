<script context="module">
	export const prerender = true;
</script>

<script>
	let text

	async function addTodo(){
		alert(text + 'Todo Added')
	}

</script>

<svelte:head>
	<title>Todos </title>
</svelte:head>

<section>

	<main> 
		<h1>My Todos</h1>
		<input type="text" bind:value={text} placeholder ="Enter Todo"/>
		<button on:click={addTodo}>Add ToDo</button>
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

	input{
		border: 1px solid black
	}

</style>
