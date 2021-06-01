<template>
  <div :class="breadcrumpClass">
    <span
      v-for="(item, itemIndex) of pathsList"
      :key="'breadcrupm-link-' + itemIndex"
    >
      <nuxt-link :to="item.path"> > {{ item.pathName }} </nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    pathsList: { type: Array, default: () => [] },
    breadcrumpClass: { type: String, default: () => '' },
  },
}
</script>

<style>
.breadcrump-link {
  margin-bottom: 10px;
}
</style>
