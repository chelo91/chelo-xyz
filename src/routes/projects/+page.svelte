<script>
  import Card from "$lib/Components/Card.svelte";
  import CardContainer from "$lib/Components/CardContainer.svelte";

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
  const tags = [
    {
      tag: "svelte",
      class: "bg-warning",
    },
    {
      tag: "node",
      class: "bg-success",
    },
    {
      tag: "html",
      class: "bg-info",
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
              <span
                class="badge {tags.find((tagColor) => tagColor.tag === tag)
                  ?.class}">{tag}</span
              >
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
