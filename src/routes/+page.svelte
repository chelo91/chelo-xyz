<script>
  import { t } from "$lib/i18n.config";
</script>

<div class="inner cover">
  <div class="row">
    <div id="colPho" class="text-center col">
      <img
        id="photo"
        class="rounded-circle"
        src="yo.jpeg"
        data-holder-rendered="true"
      />
    </div>
  </div>
  <div class="row">
    <div id="colNam" class="text-center col">
      <h3>Marcelo Aguirre</h3>
      <h4>{$t("job")}</h4>
    </div>
  </div>
  <div id="row-desc" class="row">
    <h3>{$t("about")}</h3>
    {@html $t("desc")}
  </div>
</div>

<style>
  #photo {
    height: 250px;
    width: 250px;
    padding: 10px;
  }
  @media screen and (min-width: 1135px) {
    #row-desc {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1135px) {
    #row-desc {
      padding-left: 10%;
      padding-right: 10%;
    }
  }
</style>
