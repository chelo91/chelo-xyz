<script>
  import { page } from "$app/stores";

  const menus = [
    { name: "Sobre mi", url: "/" },
    { name: "Docs", url: "/docs" },
    { name: "Blog", url: "/posts" },
  ];

  $: currentPage = $page.url.pathname;
</script>

<div class="container">
  <header class="p-3">
    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
        ><h3>Chelo.xyz</h3>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {#each menus as { url, name }}
          <li>
            <a
              data-sveltekit-prefetch
              class="nav-link px-2"
              class:link-secondary={url !== "/"
                ? currentPage.match(url)
                : url === currentPage}
              href={url}>{name}</a
            >
          </li>
        {/each}
      </ul>

      <div class="col-md-4 text-end">
        <a href="https://github.com/chelo91" role="button" class="m-1"
          ><i
            class="fab
        fa-github fa-xl"
          />
        </a>
        <a href="https://www.instagram.com/soych3lo/" role="button" class="m-1"
          ><i
            class="fab
        fa-instagram fa-xl"
          />
        </a>
        <a href="https://t.me/soych3lo" role="button" class="m-1"
          ><i
            class="fab
        fa-telegram fa-xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-aguirre-4b01a6184/"
          role="button"
          class="m-1"
          ><i class="fab fa-linkedin fa-xl" />
        </a>

        <a href="mailto:me@chelo.xyz" role="button" class="m-1">
          <i class="far fa-envelope fa-xl" />
        </a>
      </div>
    </div>
  </header>
  <section>
    <slot />
  </section>
</div>

<style>
  .container {
    color: black;
    margin-bottom: 50px;
  }
  a,
  a:hover {
    color: black;
  }
  section {
    margin-top: 20px;
    min-width: 100%;
    min-height: calc(100vh-107px);
  }
  .nav-link {
    font-size: 20px;
  }
</style>
