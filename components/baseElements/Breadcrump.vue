<template>
  <div :class="breadcrumpClass" class="orientation-info">
    <div class="container">
      <span
        v-for="(item, itemIndex) of pathsList"
        :key="'breadcrump-link-' + itemIndex"
      >
        <nuxt-link :to="item.path"> > {{ item.pathName }} </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pathsList: { type: Array, default: () => [] },
    breadcrumpClass: { type: String, default: () => "" },
  },
  mounted() {
    if (this.pathsList === []) {
      this.$root.$emit("location-from-breadcrump", "Home");
      console.log("Emit home");
    } else {
      console.log("Emit ");
      console.log(this.pathsList);
      this.$root.$emit("location-from-breadcrump", this.pathsList[0].pathName);
    }
  },
};
</script>

<style>
.breadcrump-link {
  margin-bottom: 10px;
  margin-left: 5px;
}

.single-breadcrump-link:hover {
  text-decoration: underline;
}

.orientation-info {
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    45deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 0px;
  color: white;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.1), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
</style>
