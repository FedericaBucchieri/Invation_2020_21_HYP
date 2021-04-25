<template>
  <p>
    <span> <img :src="imgPath" class="icon-contact" /> </span>
    <span class="contact-info"> {{ info }}</span>
  </p>
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
.icon-contact {
  width: 19px;
  margin-right: 10px;
}

.contact-info {
  font-size: 14px;
}
</style>
