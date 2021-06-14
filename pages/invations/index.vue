<template>
  <intro-page
    text-button="DISCOVER OUR INVATIONS"
    area-name="Our invations"
    general-link="invations"
    :hasPhotoGallery="false"
    :bigImage="bigImage"
    :paths-list="pathsList"
  >
    <template #welcome-title>
      Our products: <br /><em>The invations</em>
    </template>
    <template #welcome-overview>
      Here you can find the complete <b>list of all our invations</b>:
      innovative inventions and <i>products</i> to shape a new concrete concept
      of <u>future</u>
    </template>
    <template #entitiesList="entitiesProps">
      <content-rounded-containers
        :content="entitiesProps.entities"
        area-name="The invations"
        description-name="overview"
        research-id=""
        typology="invations"
        :displayTags="false"
        description="Discover all our products"
      ></content-rounded-containers>
    </template>
  </intro-page>
</template>

<script>
import IntroPage from "~/components/baseElements/IntroPage";
import ContentRoundedContainers from "~/components/baseElements/ContentRoundedContainers";

export default {
  components: {
    IntroPage,
    ContentRoundedContainers,
  },
  data() {
    return {
      bigImage: "/banners/banner-olo.png",
      myInvations: [],
      pathsList: [
        {
          path: this.$route.path,
          pathName: "Invations",
        },
      ],
    };
  },
  head() {
    return {
      title: "Invation - All invations",
      meta: [
        {
          name: "description",
          content: "All the invations of the Invation Team",
        },
        {
          hid: "all invations",
          name: "all invations",
          content: "all invations overview",
        },
      ],
    };
  },
  methods: {
    getInvations(entities) {
      const invations = [];
      for (let i = 0; i < entities.length; i++) {
        const newInvation = {
          name: entities[i].name,
          numberTag: entities[i].numberTag,
          // this is the attribute requested by ContentRoundedContainers
          description: entities[i].overview,
          // --------------------------------------
          image: entities[i].image,
          typology: "invations",
          vision: entities[i].vision !== undefined ? entities[i].vision : null,
        };
        invations.push(newInvation);
      }
      return invations;
    },
  },
};
</script>

<style>
#invation_list {
  padding-top: 200px;
  margin-top: 0px;
}

@media (min-width: 1140px) {
  #invation_list {
    padding-top: 200px;
    margin-top: -250px;
  }
}
</style>
