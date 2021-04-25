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
    iconPath: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.content {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  padding: 5px;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.social-icon {
  width: 40px;
  padding: 10px;
  margin: 0;
}
</style>
