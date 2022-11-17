<script>
  export let data;
</script>

{#each data.docs as doc}
  <a
    href=".{doc.path}"
    class="list-group-item list-group-item-action d-flex gap-3 py-3"
    aria-current="true"
  >
    <div class="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 class="mb-0">{doc.meta.title}</h6>
        <p class="mb-0 opacity-75">
          {doc.meta.description}
        </p>
      </div>
      <small class="opacity-50 text-nowrap">{doc.meta.date}</small>
    </div>
  </a>
{/each}
