<template>
  <!-- Our technologies -->
  <div>
    <welcome-area-start>
      <template #title> Explore our <em>Technologies</em></template>
      <template #overview>
        Our <i>Visionary</i> ideas are based on the latest <br />
        <b>Technologies</b>. Look which one of those is exploited <br />
        by our <i>Invations</i>. Under each <b>Technology</b> you can <br />
        find the related <i>Invations</i>
      </template>
    </welcome-area-start>
    <section id="technologies">
      <!-- <div v-for="technology in myTechnologies" :key="technology.id"> -->
      <div v-for="technology in technologies" :key="technology.id">
        <span></span>
        <content-rounded-containers
          :area-name="technology.name"
          :content="technology.invations"
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
import ContentRoundedContainers from '~/components/Vision/ContentRoundedContainers'

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
  // data() {
  //   return {
  //     myTechnologies: this.technologies,
  //   }
  //   // },
  //   // mounted() {
  //   //   for (let i = 0; i < this.technologies.length; i++) {
  //   //     this.myTechnologies[i] = this.technologies[i]
  //   //     const invs = this.technologies[i].invations
  //   //     this.myTechnologies[i].invations = []
  //   //     for (let j = 0; j < invs.length; j++) {
  //   //       const newInv = {
  //   //         name: invs[i].name,
  //   //         numberTag: invs[i].numberTag,
  //   //         description: invs[i].overview,
  //   //         image: invs[i].image,
  //   //         typology: 'invations',
  //   //       }
  //   //       this.myTechnologies[i].invations.push(newInv)
  //   //     }
  //   //   }
  // },
}
</script>

<style scoped>
#technologies {
  margin-bottom: 70px;
}
</style>
