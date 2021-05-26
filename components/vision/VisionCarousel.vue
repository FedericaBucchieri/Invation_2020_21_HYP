<template>
  <div class="container">
    <div class="row">
      <div class="vision-carousel">
        <h2>{{ title }}</h2>
        <input
          v-for="(item, itemIndex) of carouselObject"
          :key="'carousel-item-input' + itemIndex"
          :id="itemIndex"
          type="radio"
          name="position"
          :value="itemIndex"
          :checked="itemIndex === 0"
          v-model="picked"
        />
        <div
          v-for="(item, itemIndex) of carouselObject"
          :key="'carousel-item' + itemIndex"
          class="item-vision-carousel"
          :class="openPanelClass(itemIndex)"
        >
          <label
            v-if="itemIndex !== 0 && itemIndex === picked"
            :for="itemIndex - 1"
            title="Previous"
            class="main-button"
            :class="visibleLabelClass(itemIndex)"
            >&#8678;</label
          >
          <div class="decorationInfo">
            <h3>{{ item.numberTag }}</h3>
            <img :src="item.image" :alt="item.name" width="150" height="150" />
          </div>
          <div class="invation-description">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.subtitle }}</h4>
            <p>{{ item.overview }}</p>
          </div>
          <label
            v-if="
              itemIndex !== carouselObject.length - 1 && itemIndex === picked
            "
            :for="itemIndex + 1"
            title="Next"
            class="main-button"
            :class="visibleLabelClass(itemIndex)"
            >&#8680;</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carouselObject: { type: Array, default: () => [] },
    title: { type: String, default: () => '' },
  },
  data() {
    return {
      picked: 0,
    }
  },
  methods: {
    openPanelClass(itemIndex) {
      if (this.picked === itemIndex) {
        return 'visibleScale'
      } else {
        return null
      }
    },
    visibleLabelClass(itemIndex) {
      if (this.picked === itemIndex) {
        return 'visibleLabel'
      } else {
        return null
      }
    },
  },
}
</script>

<style scoped>
input {
  display: none;
}

.vision-carousel {
  margin-top: 100px;
  width: 100%;
  height: 80vh;
  display: block;
  text-align: center;
}

.item-vision-carousel {
  margin: auto;
  width: 80%;
  transition: transform 0.5s;
  height: 0;
  transform: scale(0);
  text-align: left;
}

.visibleScale {
  transform: scale(1);
  height: auto;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  margin: auto;
}

label {
  height: 0;
  display: none;
  transform: scale(0);
}

.visibleLabel {
  display: block;
  transform: scale(1);
}

.main-button {
  height: 50px;
}
</style>
