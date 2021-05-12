<template>
  <div>
    <!--  Welcome Area Start  -->
    <WelcomeAreaStart :text-button="textButton" :link="'#explore'">
      <template #title> Join our <em>Vision</em> of the Future </template>
      <template #overview>
        Our company was born in <b>2001</b> at the early stages of the
        <i>new millennium.</i> <br />
        with a special look at the future, <b>Invation</b> immediately started
        to imposes itself as an <i>innovative</i> company. Inside the company
        there are <i>three pillars:</i> Innovation, Invention and Teamwork.
      </template>
    </WelcomeAreaStart>

    <!-- Explore Visions -->
    <section id="explore">
      <content-rounded-containers :area-name="areaName" :content="myVisions">
      </content-rounded-containers>
    </section>

    <!-- Last three products -->
    <section id="latestProducts">
      <div class="left-image-decor"></div>
      <base-three-object-container
        :big-image="bigImage"
        :objects="last3Invations"
        :title="'Our last three invations'"
        typology="invations"
      >
      </base-three-object-container>
    </section>

    <!-- Invationers -->
    <section id="invationers">
      <short-card-container
        :title="invationerTitle"
        :card-list="invationers"
        :typology="`invationers`"
      ></short-card-container>
    </section>
  </div>
</template>

<script>
import BaseThreeObjectContainer from '~/components/baseElements/BaseThreeObjectContainer.vue'
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'
import ContentRoundedContainers from '~/components/vision/ContentRoundedContainers.vue'
import ShortCardContainer from '~/components/baseElements/ShortCardContainer.vue'

export default {
  components: {
    WelcomeAreaStart,
    ContentRoundedContainers,
    BaseThreeObjectContainer,
    ShortCardContainer,
  },
  async asyncData({ $axios }) {
    const visions = await $axios.get(`${process.env.BASE_URL}/api/visions`)

    const last3Invations = await $axios.get(
      `${process.env.BASE_URL}/api/invations_last`
    )

    const invationers = await $axios.get(
      `${process.env.BASE_URL}/api/invationers`
    )

    return {
      visions: visions.data,
      last3Invations: last3Invations.data,
      invationers: invationers.data,
    }
  },
  data() {
    return {
      textButton: 'KNOW US BETTER',
      areaName: 'Explore our Visions',
      bigImage: 'https://imgur.com/OrwkWr6.png',
      invationerTitle: 'Discover our team: The Invationers',
      myVisions: [],
    }
  },
  mounted() {
    for (let i = 0; i < this.visions.length; i++) {
      const newVision = {
        name: this.visions[i].name,
        numberTag: this.visions[i].numberTag,
        description: this.visions[i].description,
        image: this.visions[i].image,
        typology: 'visions',
      }
      this.myVisions.push(newVision)
    }
  },
  methods: {
    sendMessage(newPath, newPathName) {
      this.$store.commit('addVisitedPath', {
        path: newPath,
        pathName: newPathName,
      })
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 810px) {
  section {
    margin: 15% auto;
  }

  #latestProducts {
    margin-bottom: 150px;
  }
}

@media only screen and (min-width: 810px) {
  section {
    margin: 18% auto;
  }

  #explore {
    margin-bottom: 10%;
    margin-top: -15%;
  }

  #latestProducts {
    margin-top: -10%;
  }
}
</style>
