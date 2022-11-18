<script>
  import Card from "$lib/components/Card.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import SpanTags from "$lib/components/SpanTags.svelte";
  export let data;
</script>

<CardContainer>
  {#each data.docs as doc}
    <Card url={doc.path} target={""}>
      <slot slot="name"
        >{doc.meta.title}
        {#each doc.meta.tags as tag}
          <SpanTags data={tag} />
        {/each}
      </slot>
      <slot slot="description">{doc.meta.description}</slot>
      <slot slot="small">{doc.meta.date}</slot>
    </Card>
  {/each}
</CardContainer>
