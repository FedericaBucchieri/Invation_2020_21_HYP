<!-- This component provide a frame for an embedded video, used for products. Always coupled with ObjectMore.vue component -->
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
    // URL referencing to the video to be displayed
    videoUrl: { type: String, default: () => "" },
  },
};
</script>

<style scoped>
iframe {
  width: 70%;
  height: 450px;
  float: center;
  margin-bottom: 50px;
}

.container {
  text-align: center;
}
</style>
