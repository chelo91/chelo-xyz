<script>
  import Card from "$lib/Components/Card.svelte";
  import CardContainer from "$lib/Components/CardContainer.svelte";
  export let data;
</script>

<CardContainer>
  {#each data.docs as doc}
    <Card url={doc.path} target={""}>
      <slot slot="name">{doc.meta.title}</slot>
      <slot slot="description">{doc.meta.description}</slot>
      <slot slot="small">{doc.meta.date}</slot>
    </Card>
  {/each}
</CardContainer>
