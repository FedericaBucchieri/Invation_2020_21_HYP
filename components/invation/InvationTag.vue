<!-- Component for tags associated to technologies. 
Each tag can be displayed indiependently or in a tag bar.
 Usually used for products -->
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
    // the style class associated to a specific color for the tag
    colorClass: { type: String, default: () => "" },
    // the name to be displayed in the tag
    tagName: { type: String, default: () => "" },
    // the path to be added as a link to the tag
    relatedPath: { type: String, default: () => "" },
  },
};
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
