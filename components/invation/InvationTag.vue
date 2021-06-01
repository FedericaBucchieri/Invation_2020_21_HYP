<template>
  <li class="tag" :class="colorClass">
    <nuxt-link :to="'/invations/technologies/#' + relatedPath">
      #{{ tagName }}</nuxt-link
    >
  </li>
</template>

<script>
export default {
  props: {
    colorClass: { type: String, default: () => '' },
    tagName: { type: String, default: () => '' },
    relatedPath: { type: String, default: () => '' },
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
  background-color: green;
}

.tag-color3 {
  background-color: rebeccapurple;
}
</style>
