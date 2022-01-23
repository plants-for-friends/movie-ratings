<script>
    import { onMount } from 'svelte';
  
    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
    onMount(async () => {
      const module = await import('svelte-carousel');
      Carousel = module.default;
    });
  
    const handleNextClick = () => {
      carousel.goToNext()
    }
</script>
  
  <svelte:component
    this={Carousel}
    bind:this={carousel}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </svelte:component>
  
  <button on:click={handleNextClick}>Next</button>


