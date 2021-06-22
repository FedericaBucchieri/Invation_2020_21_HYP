<!-- Component aimed ad modelizing the blob with title and text used in the Home page of the website. -->
<template>
  <!-- The container of the blob (a simple container with a background image) -->
  <div
    class="blob-with-text"
    :style="{
      'background-image': 'url(/decor' + background + ')',
    }"
  >
    <div class="blob-title">
      <!-- Slot containing the title of the container -->
      <slot></slot>
    </div>
    <!-- The text to be inserted in the blob -->
    <div class="blob-text">
      {{ text }}
    </div>
    <!-- Link to a specific page related with the blob context. Styled as a button. -->
    <nuxt-link :to="link" class="main-button-slider">{{
      buttonText
    }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    // The text to be displayed as the body of the blob
    text: { type: String, default: () => "" },
    // the url of the background image, representing the blob
    background: { type: String, default: () => "" },
    // link to be activated by clicking o the button inside the blob
    link: { type: String, default: () => "" },
    // the label of the button
    buttonText: { type: String, default: () => "" },
  },
};
</script>

<style scoped>
.blob-with-text {
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 10px;
  height: 380px;
}

@media (min-width: 810px) {
  .blob-with-text {
    width: 30%;
  }
}

@media (max-width: 810px) {
  .blob-with-text {
    width: 100%;
    text-align: center !important;
  }
}

.blob-title {
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
}

em {
  color: #fba70b;
  font-style: normal;
}

.blob-text {
  font-size: 16px;
  color: #fff;
  margin: 0 auto 30px auto;
  width: 80%;
}
</style>
