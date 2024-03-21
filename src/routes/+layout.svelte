<script>
  import { page } from "$app/stores";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });

  const menus = [
    { name: "aboutMe", url: "/" },
    /*{ name: "Docs", url: "/docs" },
    /*{ name: "Blog", url: "/posts" },*/
    { name: "proyects", url: "/projects" },
  ];

  $: currentPage = $page.url.pathname;

  import { t, locale, loadTranslations } from "$lib/i18n.config";

  function changeLocale(newLocale) {
    loadTranslations(newLocale);
  }
</script>

<svelte:head>
  <title>Chelo.xyz - Marcelo Aguirre</title>
</svelte:head>

<div class="container">
  <header class="p-3">
    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <a
        href="/"
        class="d-flex align-items-center col-md-3 text-decoration-none"
        ><h3>Chelo.xyz</h3>
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {#each menus as { url, name }}
          <li>
            <a
              data-sveltekit-prefetch
              class="nav-link px-2"
              class:link-secondary={url !== currentPage}
              href={url}>{$t(name)}</a
            >
          </li>
        {/each}
      </ul>
      <div class="col-md-4 text-end">
        <a
          href="https://github.com/chelo91"
          role="button"
          class="m-1"
          target="_blank"
          ><i
            class="fab
        fa-github fa-xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-aguirre-4b01a6184/"
          role="button"
          class="m-1"
          target="_blank"
          ><i class="fab fa-linkedin fa-xl" />
        </a>

        <a href="mailto:me@chelo.xyz" role="button" class="m-1" target="_blank">
          <i class="far fa-envelope fa-xl" />
        </a>
      </div>
      <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <select
          id="locale"
          class="form-select"
          bind:value={$locale}
          on:change={() => changeLocale($locale)}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  </header>
  <section>
    {#each menus as { url, name }}
      {#if url !== "/" ? currentPage.match(url) : url === currentPage}
        <h1>{$t(name)}</h1>
      {/if}
    {/each}
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
  h1 {
    text-align: center;
  }
  #locale {
    margin: 3px;
    max-width: 150px;
  }
</style>
