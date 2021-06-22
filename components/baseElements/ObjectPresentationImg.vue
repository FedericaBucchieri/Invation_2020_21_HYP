<!--  Component that contain the presentation image of an object, with the relative styling required to be responsive. -->
<template>
  <div
    class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
  >
    <img
      :src="imgPath"
      class="rounded img-fluid d-block mx-auto"
      :alt="info"
      width="370"
      height="219"
    />
  </div>
</template>

<script>
export default {
  props: {
    // Informations about the image to be put as alternative text
    info: { type: String, default: () => "" },
    // Path referncing to the image to be displayed
    imgPath: { type: String, default: () => "" },
  },
};
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
