<script>
  import { t } from "$lib/i18n.config";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import Card from "$lib/components/Card.svelte";
  import SpanTags from "$lib/components/SpanTags.svelte";
</script>

<CardContainer>
  <Card url="https://chelo.xyz">
    <div slot="name">Chelo.xyz</div>
    <div slot="description">Web personal</div>
    <div slot="small">
      <SpanTags data="Svelte" />
      <SpanTags data="Svelte-kit" />
      <SpanTags data="Node.js" />
      <SpanTags data="Vercel" />
    </div>
  </Card>
  <Card url="https://carpincho.dev">
    <div slot="name">Carpinchodev</div>
    <div slot="description">Blog de programacion</div>
    <div slot="small">
      <SpanTags data="Astro" />
      <SpanTags data="Node.js" />
      <SpanTags data="Vercel" />
    </div>
  </Card>
  <Card url="https://nibiru.com.uy">
    <div slot="name">Nibiru Service</div>
    <div slot="description">
      Sistema de importacion de productos para Woocommerce, consta de varias
      partes: <br />
      - Importar productos de APIs externas <br />
      - Brindar una API para que el plugin de Wordpress pueda importar los productos
      <br />
      - Plugin de Wordpress para importar los productos <br />
    </div>
    <div slot="small">
      <SpanTags data="PHP" />
      <SpanTags data="Node.js" />
      <SpanTags data="Wordpress" />
      <SpanTags data="Linux" />
      <SpanTags data="Docker" />
    </div>
  </Card>
  <Card>
    <div slot="name">Sistema de Reservas Medica</div>
    <div slot="description">Personal website</div>
    <div slot="small">
      <SpanTags data="PHP" />
      <SpanTags data="Wordpress" />
    </div>
  </Card>
  <!--<Card url="Chelo.xyz">
    <div slot="name">Work Cafe</div>
    <div slot="description">Personal website</div>
    <div slot="small"><SpanTags data="svelte" />2021</div>
  </Card>-->
  <Card url="https://todo-next-bice.vercel.app">
    <div slot="name">Todo React</div>
    <div slot="description">Proyecto de practica de React</div>
    <div slot="small">
      <SpanTags data="React" />
      <SpanTags data="Vercel" />
    </div>
  </Card>
</CardContainer>
