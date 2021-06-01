<template>
  <ul class="tag-bar">
    <invation-tag
      v-for="(item, itemIndex) of tagList"
      :id="item.id"
      :key="'tag-' + itemIndex"
      :tag-name="item.name"
      :color-class="item.color"
      :relatedPath="item.relatedPath"
    >
    </invation-tag>
  </ul>
</template>

<script>
import InvationTag from '~/components/invation/InvationTag.vue'

export default {
  components: {
    InvationTag,
  },
  props: {
    tagList: { type: Array, default: () => [] },
  },
}
</script>

<style>
.tag-bar {
  display: inline-flex;
}

li {
  list-style: none;
}
</style>
