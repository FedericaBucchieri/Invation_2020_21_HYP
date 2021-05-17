<template>
  <the-intro-page
    text-button="DISCOVER INVATIONS TECHNOLOGIES"
    area-name="Our invations"
    general-link="invations"
  >
    <template #welcome-title>
      Our innovations: <em>The invations</em>
    </template>
    <template #welcome-overview>
      Here you can find the complete list of all our invations: innovative
      inventions and ideas to shape a new concrete concept of future
    </template>
    <template #entitiesList="entitiesProps">
      <content-rounded-containers
        :content="entitiesProps.entities"
        area-name="Our invations"
        description-name="overview"
        :has-research="true"
        typology="invations"
      ></content-rounded-containers>
    </template>
  </the-intro-page>
</template>

<script>
import TheIntroPage from '~/components/TheIntroPage'
import ContentRoundedContainers from '~/components/Vision/ContentRoundedContainers'

export default {
  components: {
    TheIntroPage,
    ContentRoundedContainers,
  },
  data() {
    return {
      myInvations: [],
    }
  },
  head() {
    return {
      title: 'Invation - All invations',
      meta: [
        {
          name: 'description',
          content: 'All the invations of the Invation Team',
        },
        {
          hid: 'all invations',
          name: 'all invations',
          content: 'all invations overview',
        },
      ],
    }
  },
  methods: {
    getInvations(entities) {
      const invations = []
      for (let i = 0; i < entities.length; i++) {
        const newInvation = {
          name: entities[i].name,
          numberTag: entities[i].numberTag,
          // this is the attribute requested by ContentRoundedContainers
          description: entities[i].overview,
          // --------------------------------------
          image: entities[i].image,
          typology: 'invations',
        }
        invations.push(newInvation)
      }
      return invations
    },
  },
}
</script>

<style></style>
