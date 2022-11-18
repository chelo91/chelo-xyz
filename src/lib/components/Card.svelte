<script>
  export let url="";
  export let target="";
</script>

<a
  href="{url}"
  class="list-group-item list-group-item-action d-flex gap-3 py-3"
  aria-current="true"
  target="{target}"
>
  <div class="d-flex gap-2 w-100 justify-content-between">
    <div>
      <h6 class="mb-0">
        <slot name="name"/>
    </h6>
      <p class="mb-0 opacity-75">
        <slot name="description"/>
      </p>
    </div>
    <small class="opacity-50 text-nowrap">
        <slot name="small"/>
    </small>
  </div>
</a>
