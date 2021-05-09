<template>
  <div :class="featuresItemClass">
    <features-title-section
      v-if="right"
      :content="titleContent"
    ></features-title-section>
    <features-details-section
      :content="detailsContent"
    ></features-details-section>
    <features-title-section
      v-if="!right"
      :content="titleContent"
    ></features-title-section>
  </div>
</template>

<script>
import FeaturesDetailsSection from '~/components/vision/FeaturesDetailsSection.vue'
import FeaturesTitleSection from '~/components/vision/FeaturesTitleSection.vue'

export default {
  components: {
    FeaturesDetailsSection,
    FeaturesTitleSection,
  },
  props: {
    right: { type: Boolean, default: () => true },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    overview: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    numberTag: { type: String, default: () => '' },
  },
  data() {
    return {
      featuresItemClass: '',
      featuresSection: {
        firstSection: { type: String, default: () => '' },
        secondSection: { type: String, default: () => '' },
      },
      titleContent: [this.title, this.subtitle, this.overview],
      detailsContent: [this.numberTag, this.image],
    }
  },
  mounted() {
    if (this.right) {
      this.featuresItemClass = 'features-item-right'
    } else {
      this.featuresItemClass = 'features-item-left'
    }
  },
}
</script>

<style scoped>
.features-item-right {
  border-radius: 5px;
  padding: 0px 30px;
  text-align: right;
  display: flex;
  margin-right: 100px;
  background-image: url(static/decor/bg-featured-right.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.features-item-left {
  border-radius: 5px;
  padding: 0px 30px;
  text-align: left;
  display: flex;
  margin-right: 100px;
  background-image: url(static/decor/bg-featured-left.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.features-item-right p {
  max-width: 70%;
  float: right;
  margin-bottom: 20px;
}

.features-item-left p {
  max-width: 70%;
  float: left;
  margin-bottom: 20px;
}
</style>
