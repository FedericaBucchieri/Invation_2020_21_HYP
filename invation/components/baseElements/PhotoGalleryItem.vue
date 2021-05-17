<template>
  <nuxt-link :to="detailPage" @click.native="updateBreadcrump">
    <img :src="imgPath" :alt="info" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    info: { type: String, default: () => '' },
    imgPath: { type: String, default: () => '' },
    detailPage: { type: String, default: () => '' },
  },
  methods: {
    updateBreadcrump() {
      // If I am not in the HomePage
      if (!(this.$store.state.currentPageName === '')) {
        this.sendMessage(this.$route.path, this.$store.state.currentPageName)
      }
      this.updateCurrentPageName()
    },
    sendMessage(newPath, newPathName) {
      this.$store.commit('addVisitedPath', {
        path: newPath,
        pathName: newPathName,
      })
    },
    updateCurrentPageName() {
      this.$store.commit('updateCurrentPageName', this.name)
    },
  },
}
</script>

<style scoped>
img {
  width: 330px;
  height: auto;
}
</style>
