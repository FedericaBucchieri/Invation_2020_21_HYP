<template>
  <div
    class="blob-with-text"
    :style="{
      'background-image': 'url(/decor' + background + ')',
    }"
  >
    <div class="blob-title">
      <slot></slot>
    </div>
    <div class="blob-text">
      {{ text }}
    </div>
    <nuxt-link :to="link" class="main-button-slider">{{
      buttonText
    }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: () => '' },
    background: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    buttonText: { type: String, default: () => '' },
  },
}
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
