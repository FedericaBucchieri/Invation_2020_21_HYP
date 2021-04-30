<template>
  <li class="tag" :class="colorClass">
    <nuxt-link :to="'/technology/' + id"> #{{ tagName }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => 0 },
    colorClass: { type: String, default: () => '' },
    tagName: { type: String, default: () => '' },
  },
}
</script>

<style>
.tag {
  padding: 5px;
  margin: 0px 10px 0 0;
  font-size: 9px;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  min-width: 100px;
  text-align: center;
}

.tag-color1 {
  background-color: teal;
}

.tag-color2 {
  background-color: #fba70b;
}
</style>
