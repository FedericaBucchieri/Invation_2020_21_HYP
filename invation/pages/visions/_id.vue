<template>
  <div class="containerMio">
    <div class="row">
      <div
        v-for="(item, itemIndex) of vision.invations"
        :key="'invation-link-' + itemIndex"
        class="link-container"
      >
        <nuxt-link :to="'/invation/' + item.id" @click.native="sendPath(item)">
          {{ item.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/visions/${id}`
    )
    const vision = data
    return {
      vision,
    }
  },
  methods: {
    sendPath(pathItem) {
      this.$store.commit('addVisitedPath', {
        path: '/invation/' + pathItem.id,
        pathName: pathItem.name,
      })
    },
  },
}
</script>

<style>
.containerMio {
  position: relative;
  top: 400px;
  left: 400px;
}
</style>
