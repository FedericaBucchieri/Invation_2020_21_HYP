<template>
  <nuxt-link :to="'/'" class="menu-item">{{
    TheHeaderMenuItemExtension
  }}</nuxt-link>
</template>

<script>
export default {
  props: {
    TheHeaderMenuItemExtension: { type: String, default: () => '' },
  },
}
</script>

<style></style>
