<script>
  import { t } from "$lib/i18n.config";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import Card from "$lib/components/Card.svelte";
  import SpanTags from "$lib/components/SpanTags.svelte";
</script>

<CardContainer>
  <Card url="https://github.com/chelo91/chelo-xyz">
    <div slot="name">{@html $t("proPersonalName")}</div>
    <div slot="description">{@html $t("proPersonalDesc")}</div>
    <div slot="small">
      <SpanTags data="Svelte-kit" />
      <SpanTags data="Node.js" />
    </div>
  </Card>
  <Card url="https://github.com/chelo91/carpincho-dev">
    <div slot="name">{@html $t("proBlogName")}</div>
    <div slot="description">{$t("proBlogDesc")}</div>
    <div slot="small">
      <SpanTags data="Astro" />
      <SpanTags data="Node.js" />
    </div>
  </Card>
  <Card url="https://nibiru.com.uy">
    <div slot="name">{@html $t("proNibiruName")}</div>
    <div slot="description">{@html $t("proNibiruDesc")}</div>
    <div slot="small">
      <SpanTags data="PHP" />
      <SpanTags data="Node.js" />
      <SpanTags data="Wordpress" />
    </div>
  </Card>
  <Card>
    <div slot="name">{@html $t("proMedicName")}</div>
    <div slot="description">{@html $t("proMedicDesc")}</div>
    <div slot="small">
      <SpanTags data="PHP" />
      <SpanTags data="Wordpress" />
    </div>
  </Card>
  <Card url="https://todo.carpincho.dev">
    <div slot="name">{@html $t("proTodoName")}</div>
    <div slot="description">{@html $t("proTodoDesc")}</div>
    <div slot="small">
      <SpanTags data="React" />
    </div>
  </Card>
  <Card url="https://github.com/chelo91/api-utils">
    <div slot="name">{@html $t("proMidCfName")}</div>
    <div slot="description">{@html $t("proMidCfDesc")}</div>
    <div slot="small">
      <SpanTags data="Node.js" />
    </div>
  </Card>
</CardContainer>
