<template>
  <div class="ciao">
    <button @click="sendMessage">Send Path</button>
    <div
      v-for="(item, itemIndex) of this.$store.state.visitedPaths"
      :key="'tag-' + itemIndex"
    >
      {{ item }}
    </div>
    <nuxt-link to="/testPage2">Vai alla page 2 </nuxt-link>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$store.commit('addVisitedPath', this.$route.path)
    },
  },
}
</script>

<style>
.ciao {
  position: relative;
  top: 400px;
}
</style>
