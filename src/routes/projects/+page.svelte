<script>
  import Card from "$lib/components/Card.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import SpanTags from "$lib/components/SpanTags.svelte";

  const projects = [
    {
      title: "Seleccionador de Menus",
      description: "",
      url: "https://menu.chelo.xyz/",
      tags: ["svelte"],
    },
    {
      title: "Work Cafe",
      description: "",
      url: "https://cafe.chelo.xyz/",
      tags: ["html"],
    },
    /*{
      title: "Profile",
      description: "",
      url: "https://chelo.xyz/",
      tags: ["svelte"],
    },*/
    {
      title: "Penca Mundial",
      description: "",
      url: "https://svelte-mundial.vercel.app/",
      tags: ["svelte"],
    },
  ];
</script>

<div class="center">
  <div class="col-12 col-lg-9">
    <CardContainer>
      {#each projects as project}
        <Card url={project.url} target={"_blank"}>
          <slot slot="name">{project.title}</slot>
          <slot slot="description">{project.description}</slot>
          <slot slot="small">
            {#each project.tags as tag}
              <SpanTags data={tag} />
            {/each}
          </slot>
        </Card>
      {/each}
    </CardContainer>
  </div>
</div>

<style>
  .center {
    text-align: -webkit-center;
  }
</style>
