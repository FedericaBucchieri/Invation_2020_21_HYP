<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <section>
      <!-- ***** Overview Start ***** -->
      <object-overview
        :name="invation.name"
        :img-path="invation.image"
        :overview="invation.summary"
        :tags="tags"
      ></object-overview>
      <!-- ***** Overview End ***** -->
    </section>
    <div class="right-image-decor"></div>
    <!-- ***** Concept Start ***** -->
    <section>
      <object-concept :concept="invation.concept"></object-concept>
      <object-video :video-url="videoUrl"></object-video>
    </section>
    <!-- ***** Concept End ***** -->
    <div class="left-image-decor"></div>
    <!-- ***** More Start ***** -->
    <section>
      <object-more :content="invation.more"></object-more>
    </section>
    <!-- ***** More End ***** -->
  </div>
</template>

<script>
import ObjectOverview from '~/components/invation/ObjectOverview.vue'
import ObjectConcept from '~/components/invation/ObjectConcept.vue'
import ObjectVideo from '~/components/invation/ObjectVideo.vue'
import ObjectMore from '~/components/invation/ObjectMore.vue'

export default {
  components: {
    ObjectOverview,
    ObjectConcept,
    ObjectVideo,
    ObjectMore,
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
      // to be retrieved from the database
      tags: [
        {
          colorClass: 'tag-color1',
          tagName: 'Smart Spaces',
        },
        {
          colorClass: 'tag-color2',
          tagName: 'IoT',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    }
  },
}
</script>

<style scoped>
.container {
  padding: 40px 0px;
}

.left-image-decor {
  background-image: url(/decor/left-bg-decor.png);
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  display: inline-block;
  height: 110%;
  margin-top: -200px;
}

.right-image-decor {
  background-image: url(/decor/right-bg-decor.png);
  background-repeat: no-repeat;
  background-position: right center;
  position: absolute;
  width: 100%;
  display: inline-block;
  height: 110%;
  margin-top: -200px;
}
</style>
