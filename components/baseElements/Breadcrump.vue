<!--  Component for the Orientation Info development-->
<template>
  <div :class="breadcrumpClass" class="orientation-info">
    <div class="container">
      <!-- list of path to be displayed in the breadcrump -->
      <span
        v-for="(item, itemIndex) of myPathList"
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
  data() {
    return {
      myPathList: this.pathsList,
    };
  },
  // Mounted property that inables the navigation bar to highligth the corresponding element of the user location inside the website
  mounted() {
    if (this.myPathList === []) {
      this.$root.$emit("location-from-breadcrump", "Home");
      console.log("Emit home");
    } else {
      console.log("Emit ");
      console.log(this.myPathList);
      this.$root.$emit("location-from-breadcrump", this.myPathList[0].pathName);
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
