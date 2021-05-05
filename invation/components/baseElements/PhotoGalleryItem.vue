<template>
  <div data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
    <a :href="detailPage">
      <img :src="imgPath" :alt="info" />
    </a>
  </div>
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
}
</style>
