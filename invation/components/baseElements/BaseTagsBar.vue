<template>
  <ul class="tag-bar">
    <base-tag
      v-for="(item, itemIndex) of tagList"
      :key="'tag-' + itemIndex"
      :tag-name="item.tagName"
      :color-class="item.colorClass"
    >
    </base-tag>
  </ul>
</template>

<script>
import BaseTag from '~/components/baseElements/BaseTag.vue'

export default {
  components: {
    BaseTag,
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
