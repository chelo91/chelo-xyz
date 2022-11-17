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
      tags: ["html"],
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

  const inventario = [
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "bananas", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
  ];

  const resultado = tags.find((tag) => tag.tag === tag);

  console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
</script>

<div class="center">
  <ol class="list-group list-group-numbered col-12 col-md-10 col-lg-7">
    {#each projects as project}
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a href={project.url} aria-current="true" target="_blank">
        <li
          class="list-group-item d-flex align-items-start"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">{project.title}</div>
            <p class="mb-1">{project.description}</p>
          </div>
          {#each project.tags as tag}
            <span
              class="badge {tags.find((tagColor) => tagColor.tag === tag)
                ?.class}">{tag}</span
            >
          {/each}
        </li>
      </a>
    {/each}
  </ol>
</div>

<style>
  .center {
    text-align: -webkit-center;
  }
  a {
    text-decoration: none;
  }
  span {
    margin: 2px;
  }
  p{
    text-align-last: left;
  }
</style>
