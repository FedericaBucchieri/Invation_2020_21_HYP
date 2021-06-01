<template>
  <div :class="featuresItemClass">
    <features-title-section
      v-if="item.right"
      :content="titleContent"
    ></features-title-section>
    <features-details-section
      :content="detailsContent"
    ></features-details-section>
    <features-title-section
      v-if="!item.right"
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
    item: {
      type: Object,
      default() {
        return {
          item: {
            type: Object,
            default() {
              return {
                id: { type: Number, default: () => 0 },
                name: { type: String, default: () => '' },
                subtitle: { type: String, default: () => '' },
                overview: { type: String, default: () => '' },
                image: { type: String, default: () => '' },
                numberTag: { type: String, default: () => '' },
              }
            },
          },
          right: { type: Boolean, default: () => false },
        }
      },
    },
    typology: { type: String, default: () => '' },
  },
  data() {
    return {
      featuresItemClass: '',
      featuresSection: {
        firstSection: { type: String, default: () => '' },
        secondSection: { type: String, default: () => '' },
      },
      titleContent: [
        this.item.item.name,
        this.item.item.subtitle,
        this.item.item.overview,
        `/${this.typology}/` + `${this.item.item.id}`,
      ],
      detailsContent: [
        this.item.item.numberTag,
        this.item.item.thumbnail,
        this.item.item.name,
      ],
    }
  },
  mounted() {
    if (this.item.right) {
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
  margin-top: 50px;
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
  margin-top: 50px;
}

@media screen and (max-width: 810px) {
  .features-item-left {
    padding: 30px;
    margin: 20px auto;
    flex-wrap: wrap;
    background-color: white;
    background-image: none;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .features-item-right {
    padding: 30px;
    margin: 20px auto;
    flex-wrap: wrap-reverse;
    background-color: white;
    background-image: none;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
