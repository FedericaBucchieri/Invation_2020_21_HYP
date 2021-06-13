<!--
IntroPage component.
Aimed at containing the logic behind an Introductive page
-->
<template>
  <div class="intro-page-content">
    <!-- insert breadcrump component -->
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- welcome area start component-->
    <welcome-area-start
      :text-button="textButton"
      :link="'#' + generalLink"
      :big-image="bigImage"
    >
      <!-- slot containing the title to put at the beginning of the intro page -->
      <template #title><slot name="welcome-title"></slot> </template>
      <!-- slot containing the overview to put at the beginning of the intro page, after the title -->
      <template #overview><slot name="welcome-overview"></slot> </template>
    </welcome-area-start>
    <!-- end of the welcome area component-->

    <!-- decoration slideshow component, shown if hasPhotoGallery === true -->
    <decoration-slide-show
      v-show="hasPhotoGallery"
      :slide-objects="slideObjects"
      :title="slideObjectTitle"
      :introduction="slideObjectIntro"
    ></decoration-slide-show>
    <!-- end of decoration slideshow component-->

    <!-- scoped slot used to pass the general link to the child component-->
    <!-- https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots -->
    <section :id="generalLink">
      <!-- passing the entities to be rendered for the intro page -->
      <slot name="entitiesList" :entities="entities"></slot>
    </section>
    <!-- end of the section rendering all the entities -->
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import DecorationSlideShow from "../decoration/DecorationSlideShow.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";

export default {
  components: {
    Breadcrump,
    WelcomeAreaStart,
    DecorationSlideShow,
  },
  props: {
    textButton: { type: String, default: () => "" },
    areaName: { type: String, default: () => "" },
    bigImage: { type: String, default: () => "" },
    generalLink: { type: String, default: () => "" },
    pathsList: { type: Array, default: () => [] },
    slideObjects: { type: Array, default: () => [] },
    slideObjectTitle: { type: String, default: () => "" },
    slideObjectIntro: { type: String, default: () => "" },
    hasPhotoGallery: { type: Boolean, default: () => true },
  },
  data() {
    return {
      // necessary to define the data provided by fetch
      entities: [],
    };
  },
  // problem: https://nuxtjs.org/docs/2.x/features/data-fetching#async-data-in-components
  // solution: https://nuxtjs.org/docs/2.x/features/data-fetching#the-fetch-hook
  async fetch() {
    const entitesData = await this.$axios.get(
      `${process.env.BASE_URL}/api/${this.generalLink}`
    );
    this.entities = entitesData.data;
  },
  // SSR
  fetchOnServer: true,
};
</script>

<style scoped>
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
