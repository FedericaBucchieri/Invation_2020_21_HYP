<template>
  <nuxt-link :to="detailPage">
    <img :src="imgPath" :alt="info" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    info: { type: String, default: () => '' },
    imgPath: { type: String, default: () => '' },
    detailPage: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
img {
  width: 330px;
  height: auto;
}
</style>
