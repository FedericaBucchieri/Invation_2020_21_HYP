<template>
  <div>
    <div class="left-image-decor"></div>
    <section id="introduction" class="section">
      <object-overview
        :name="vision.name"
        :img-path="vision.image"
        :overview="vision.description"
      >
      </object-overview>
    </section>
    <div class="right-image-decor"></div>
    <section id="innovations" class="section">
      <guided-tour
        :items="vision.invations"
        typology="invations"
        :video="vision.video"
      ></guided-tour>
    </section>
    <short-card-container
      title="Invationers that built this Vision"
      :card-list="vision.invationers"
    >
    </short-card-container>
  </div>
</template>

<script>
import GuidedTour from '../../components/baseElements/GuidedTour.vue'
import ObjectOverview from '../../components/baseElements/ObjectOverview.vue'
import ShortCardContainer from '~/components/baseElements/ShortCardContainer.vue'
export default {
  components: { ObjectOverview, GuidedTour, ShortCardContainer },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const visionData = await $axios.get(
      `${process.env.BASE_URL}/api/visions/${id}`
    )
    const vision = visionData.data
    return {
      vision,
    }
  },
  methods: {
    sendPath(pathItem) {
      this.$store.commit('addVisitedPath', {
        path: '/visions/' + pathItem.id,
        pathName: pathItem.name,
      })
    },
  },
}
</script>

<style scoped>
#introduction {
  padding: 100px 0px;
}

#introduction .left-image {
  align-self: center;
}

#introduction .right-text ul {
  padding: 0;
  margin: 0;
}

#introduction .right-text ul li {
  display: inline-block;
  margin-bottom: 60px;
}

#introduction .right-text ul li:last-child {
  margin-bottom: 0px;
}

#introduction .right-text img {
  display: inline-block;
  float: left;
  margin-right: 30px;
}

#introduction .right-text h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-top: 80px;
  margin-bottom: 30px;
  color: #191a20;
}

#introduction .right-text h1 em {
  font-style: normal;
  color: #fba70b;
}

#introduction .right-text h4 {
  font-size: 15px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
}
</style>
