<script>
  import SpanTags from "$lib/components/SpanTags.svelte";
  export let data;
</script>

<article>
  <h1>
    {data.title}
  </h1>
  <p>
    {#each data.tags as tag}
      <SpanTags data={tag} />
    {/each}
  </p>
  <p>Fecha: {data.date}</p>
  <div class="list-group-item">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  div {
    background: rgba(255, 255, 255, 0.4);
  }
</style>
