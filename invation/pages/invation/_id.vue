<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <section>
      <!-- ***** Overview Start ***** -->
      <object-overview
        :name="invation.name"
        :img-path="invation.image"
        :overview="invation.overview"
        :tags="invation.technologies"
      ></object-overview>
      <!-- ***** Overview End ***** -->
    </section>
    <!-- ***** Concept Start ***** -->
    <section id="section1">
      <object-concept :concept="invation.concept"></object-concept>
    </section>
    <div class="right-image-decor"></div>
    <!-- ***** Concept End ***** -->
    <div class="more">
      <!-- Non so perchè non funziona più -->
      <a
        v-if="!showMore"
        href="#section2"
        class="main-button"
        @click="showMore = !showMore"
      >
        Show More
      </a>
      <a
        v-else
        href="#section1"
        class="main-button"
        @click="showMore = !showMore"
      >
        Show Less
      </a>
    </div>
    <!-- ***** More Start ***** -->
    <section v-if="showMore" id="section2">
      <hr />
      <object-video :video-url="invation.video"></object-video>
      <object-more :content="invation.more"></object-more>
      <hr />
    </section>
    <!-- ***** More End ***** -->
    <!-- ***** Invationer Start ***** -->
    <section id="invationers">
      <invartioner-short-card-container
        :card-list="invation.invationers"
      ></invartioner-short-card-container>
    </section>
    <!-- ***** Invationer End ***** -->
  </div>
</template>

<script>
import ObjectOverview from '~/components/invation/ObjectOverview.vue'
import ObjectConcept from '~/components/invation/ObjectConcept.vue'
import ObjectVideo from '~/components/invation/ObjectVideo.vue'
import ObjectMore from '~/components/invation/ObjectMore.vue'
import InvartionerShortCardContainer from '~/components/invationer/InvartionerShortCardContainer.vue'

export default {
  components: {
    ObjectOverview,
    ObjectConcept,
    ObjectVideo,
    ObjectMore,
    InvartionerShortCardContainer,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/invation/${id}`
    )
    const invation = data
    return {
      invation,
    }
  },
  data() {
    return {
      showMore: false,
    }
  },
}
</script>

<style scoped>
.content {
  margin-top: 5%;
}

.container {
  padding: 40px 15px;
}

.more {
  text-align: center;
}

hr {
  width: 70%;
}

#invationers {
  margin-top: 10%;
}
</style>
