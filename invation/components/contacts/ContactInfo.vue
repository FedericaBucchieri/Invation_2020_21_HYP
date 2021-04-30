<template>
  <div>
    <span> <img :src="imgPath" class="icon-contact" /> </span>
    <span class="contact-info"> {{ info }}</span>
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
.icon-contact {
  width: 15px;
  margin-right: 10px;
}

.contact-info {
  font-size: 14px;
  color: whitesmoke;
}
</style>
