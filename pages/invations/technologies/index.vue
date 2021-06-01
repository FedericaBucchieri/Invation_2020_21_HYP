<template>
  <!-- Our technologies -->
  <div>
    <welcome-area-start
      :paths-list="pathsList"
      :bigImage="'/banners/banner-agumented.png'"
    >
      <template #title> Explore our <em>Technologies</em></template>
      <template #overview>
        Our <i>Visionary</i> ideas are based on the latest <br />
        <b>Technologies</b>. Look which one of those is exploited <br />
        by our <i>Invations</i>. Under each <b>Technology</b> you can <br />
        find the related <i>Invations</i>
      </template>
    </welcome-area-start>
    <!-- Each technology container -->
    <section id="technologies">
      <div
        v-for="technology in technologies"
        :key="technology.id"
        :id="technology.relatedPath"
      >
        <span></span>
        <content-rounded-containers
          :area-name="technology.name"
          :content="technology.invations"
          :hasResearch="true"
          :description="technology.description"
          description-name="overview"
          typology="invations"
        >
        </content-rounded-containers>
      </div>
    </section>
  </div>
</template>

<script>
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'
import ContentRoundedContainers from '~/components/baseElements/ContentRoundedContainers'

export default {
  components: {
    WelcomeAreaStart,
    ContentRoundedContainers,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/technologies`
    )
    const technologies = data
    return {
      technologies,
    }
  },
  data() {
    return {
      pathsList: [
        {
          path: '/invations',
          pathName: 'Invations',
        },
        {
          path: '/invations/technologies',
          pathName: 'Technologies',
        },
      ],
    }
  },
}
</script>

<style scoped>
#technologies {
  margin-bottom: 70px;
}

@media (max-width: 810px) {
  em {
    font-size: smaller;
  }
}
</style>
