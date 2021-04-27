<template>
  <div class="container">
    <iframe
      :src="videoUrl + '?autoplay=1&mute=1'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
iframe {
  width: 70%;
  height: 450px;
  margin: 100px auto;
  float: center;
}
</style>
