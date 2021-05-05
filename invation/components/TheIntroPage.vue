<template>
  <div class="content">
    <!-- ***** Welcome area start ***** -->
    <welcome-area-start :text-button="textButton">
      <template #title><slot name="welcome-title"></slot> </template>
      <template #overview><slot name="welcome-overview"></slot> </template>
    </welcome-area-start>
    <!-- ***** Welcome area end ***** -->

    <!--**** Overlay area start ****-->
    <div v-if="hasOverlay" class="overlay">
      <div class="container">
        <div
          data-effect="slide-bottom"
          data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
        >
          <h3><slot name="overlay-title"></slot></h3>
          <div class="img-team">
            <slot name="overlay-img"></slot>
          </div>
        </div>
      </div>
    </div>
    <!--**** Overlay area end ****-->

    <!--**** Photogallery area starts ****-->
    <photo-gallery :img-list="invationsDemo"> </photo-gallery>
    <!--**** Photogallery area ends ****-->

    <!-- ***** All entities area starts ***** -->
    <section :id="generalLink">
      <invartioner-short-card-container
        :card-list="entities"
        :title="`The ${thisGeneralLink}`"
      ></invartioner-short-card-container>
    </section>
    <!-- ***** All people area ends ***** -->
  </div>
</template>

<script>
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'
import PhotoGallery from '~/components/baseElements/PhotoGallery.vue'
import InvartionerShortCardContainer from '~/components/invationer/InvartionerShortCardContainer.vue'

export default {
  components: {
    WelcomeAreaStart,
    PhotoGallery,
    InvartionerShortCardContainer,
  },
  props: {
    textButton: { type: String, default: () => '' },
    areaName: { type: String, default: () => '' },
    generalLink: { type: String, default: () => '' },
    hasOverlay: { type: Boolean, default: () => false },
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
  fetchOnServer: true,
}
</script>

<style scoped>
.overlay {
  padding: 60px 0 0 0;
  background-color: #f4813f;
}
.img-team {
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  margin: auto;
}

.img-team > img {
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 600px) {
  .img-team > img {
    max-width: 100%;
    height: auto;
  }
}
</style>
