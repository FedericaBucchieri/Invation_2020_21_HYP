<!-- This component modelize a contact info that comes with an icon representing the contanct method and the related info -->
<template>
  <div>
    <span>
      <img :src="imgPath" class="icon-contact" :alt="info" />
    </span>
    <span class="contact-info"> {{ info }}</span>
  </div>
</template>

<script>
export default {
  props: {
    // The contact modality label text
    info: { type: String, default: () => "" },
    // path for the contact icon image
    imgPath: { type: String, default: () => "" },
  },
};
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
