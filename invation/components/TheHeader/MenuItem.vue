<template>
  <div>
    <nuxt-link :to="'/'">{{ TheHeaderMenuItem }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    TheHeaderMenuItem: { type: String, default: () => '' },
  },
}
</script>

<style></style>
