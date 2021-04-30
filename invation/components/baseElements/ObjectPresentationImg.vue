<template>
  <div
    class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
  >
    <img :src="imgPath" class="rounded img-fluid d-block mx-auto" :alt="info" />
  </div>
</template>

<script>
export default {
  props: {
    info: { type: String, default: () => '' },
    imgPath: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.left-image {
  align-self: center;
}

.left-image img {
  margin-top: 50px;
}

.img-magnifier-container {
  position: relative;
}
</style>
