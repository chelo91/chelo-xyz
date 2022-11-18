<script>
  export let data = "";
  const tags = [
    {
      tag: "svelte",
      color: "bg-warning",
    },
    {
      tag: "node",
      color: "bg-success",
    },
    {
      tag: "html",
      color: "bg-info",
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
