<template>
  <div class="intro-page-content">
    <!-- ***** Welcome area start ***** -->
    <welcome-area-start
      :text-button="textButton"
      :link="'#' + generalLink"
      :paths-list="pathsList"
    >
      <template #title><slot name="welcome-title"></slot> </template>
      <template #overview><slot name="welcome-overview"></slot> </template>
    </welcome-area-start>
    <!-- ***** Welcome area end ***** -->

    <!--**** Overlay area start ****-->
    <div v-if="hasOverlay" class="overlay">
      <div class="container">
        <div
          class="featured-box"
          data-effect="slide-bottom"
          data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
        >
          <h3><slot name="overlay-title"></slot></h3>
          <slot name="overlay-img"></slot>
        </div>
      </div>
    </div>
    <!--**** Overlay area end ****-->

    <!--**** Photogallery area starts ****-->
    <!-- <photo-gallery :img-list="invationsDemo"> </photo-gallery> -->
    <!-- <base-gallery :imgList="invationsDemo"></base-gallery> -->
    <base-slide-show
      :slideObjects="slideObjects"
      :title="slideObjectTitle"
      :introduction="slideObjectIntro"
    ></base-slide-show>
    <!--**** Photogallery area ends ****-->

    <!-- ***** All entities area starts ***** -->
    <section :id="generalLink">
      <slot name="entitiesList" :entities="entities"></slot>
    </section>
    <!-- ***** All entities area ends ***** -->
  </div>
</template>

<script>
// import BaseGallery from './baseElements/BaseGallery.vue'
import BaseSlideShow from './baseElements/BaseSlideShow.vue'
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'
// import PhotoGallery from '~/components/baseElements/PhotoGallery.vue'

export default {
  components: {
    WelcomeAreaStart,
    // PhotoGallery,
    // BaseGallery,
    BaseSlideShow,
  },
  props: {
    textButton: { type: String, default: () => '' },
    areaName: { type: String, default: () => '' },
    generalLink: { type: String, default: () => '' },
    hasOverlay: { type: Boolean, default: () => false },
    pathsList: { type: Array, default: () => [] },
    slideObjects: { type: Array, default: () => [] },
    slideObjectTitle: { type: String, default: () => '' },
    slideObjectIntro: { type: String, default: () => '' },
  },
  data() {
    return {
      thisGeneralLink: this.generalLink,
      // necessary to define the data provided by fetch
      invationsDemo: [],
      entities: [],
    }
  },
  // problem: https://nuxtjs.org/docs/2.x/features/data-fetching#async-data-in-components
  // solution: https://nuxtjs.org/docs/2.x/features/data-fetching#the-fetch-hook
  async fetch() {
    const invationsDemoData = await this.$axios.get(
      `${process.env.BASE_URL}/api/invations10`
    )
    this.invationsDemo = invationsDemoData.data

    const entitesData = await this.$axios.get(
      `${process.env.BASE_URL}/api/${this.generalLink}`
    )
    this.entities = entitesData.data
  },
  // SSR best-practice? - to ask
  fetchOnServer: true,
}
</script>

<style scoped>
.overlay {
  padding: 60px 0 0 0;
  background-color: #f4813f;
}

.featured-box {
  text-align: center;
}

.featured-box h3 {
  color: #fff;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding: 25px;
}

.featured-box > img {
  max-width: 100%;
  height: auto;
}
</style>
