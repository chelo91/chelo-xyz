<script>
  const projects = [
    {
      title: "Seleccionador de Menus",
      description: "",
      url: "https://menu.chelo.xyz/",
      tags: ["svelte", "node"],
    },
    {
      title: "Work Cafe",
      description: "",
      url: "https://cafe.chelo.xyz/",
      tags: ["html", "css"],
    },
    {
      title: "Profile",
      description: "",
      url: "https://chelo.xyz/",
      tags: ["svelte"],
    },
    {
      title: "Penca Mundial",
      description: "",
      url: "https://svelte-mundial.vercel.app/",
      tags: ["svelte"],
    }
  ];
</script>

<h1>projectos</h1>
<div class="list-group w-auto">
  {#each projects as project}
    <a
      href="{project.url}"
      class="list-group-item list-group-item-action d-flex gap-3 py-3"
      aria-current="true"
      target="_blank"
    >
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">{project.title}</h6>
          <p class="mb-0 opacity-75">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  {/each}
</div>
