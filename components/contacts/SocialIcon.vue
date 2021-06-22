<!-- This component modelize a social media icon with thre related link to the external website of the social media platform -->
<template>
  <div class="content">
    <a :href="link">
      <img :src="iconPath" class="social-icon" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // the path of the image representing the social
    iconPath: { type: String, default: () => "" },
    // the link to the profile of the company in that social
    link: { type: String, default: () => "" },
  },
};
</script>

<style scoped>
.content {
  vertical-align: middle;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.social-icon {
  width: 35px;
  padding: 10px;
  margin: 0;
}
</style>
