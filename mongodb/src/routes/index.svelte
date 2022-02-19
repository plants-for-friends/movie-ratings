<script context="module">
	export const prerender = true;
</script>

<script>
	let text = ''

	async function addTodo(){
		try{
			const todo = {
				text,
				completed: false
			}
			await fetch('/todos.',{
				method: 'POST',
				body: JSON.stringify(todo)
			})
		
		} catch(err)
			{
				alert('There was an Error')
			}

	}

</script>

<svelte:head>
	<title>Todos </title>
</svelte:head>

<section>

	<main> 
		<h1>My Todos</h1>
		<input type="text"  placeholder ="Enter Todo" bind:value={text} />
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
