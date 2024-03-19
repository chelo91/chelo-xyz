<script>
  export let data = "";
  const tags = [
    {
      tag: "Svelte-kit",
      color: "bg-warning",
    },
    {
      tag: "Node.js",
      color: "bg-success",
    },
    {
      tag: "PHP",
      color: "bg-primary",
    },
    {
      tag: "Astro",
      color: "bg-dark",
    },
    {
      tag: "Wordpress",
      color: "bg-info",
    },
    {
      tag: "React",
      color: "bg-danger",
    },
  ];
</script>

<span
  class="badge {tags.find((tagColor) => tagColor.tag === data)?.color ||
    'bg-secondary'}">{data}</span
>

<style>
  span {
    margin: 2px;
    padding: 5px;
  }
</style>
