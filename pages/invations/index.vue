<template>
  <intro-page
    text-button="DISCOVER OUR INVATIONS"
    area-name="Our invations"
    general-link="invations"
    :hasPhotoGallery="false"
    :bigImage="bigImage"
    :paths-list="pathsList"
    :slideObjects="slideObjects"
    :slideObjectTitle="'What we care about'"
    :slideObjectIntro="'To build or innovation we always keep in mind our goals and our mission.'"
  >
    <template #welcome-title>
      Our products: <br /><em>The invations</em>
    </template>
    <template #welcome-overview>
      Here you can find the complete list of all our invations: innovative
      inventions and ideas to shape a new concrete concept of future
    </template>
    <template #entitiesList="entitiesProps">
      <content-rounded-containers
        :content="entitiesProps.entities"
        area-name="The invations"
        description-name="overview"
        research-id=""
        typology="invations"
        :displayTags="false"
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
      slideObjects: [
        {
          title: "Expanding",
          text:
            "Our goal is to expand worldwide to bring our visions to the extraordinary! Help us enlarge our network",
          background: "https://imgur.com/3CSOdHC.png",
        },
        {
          title: "Control",
          text:
            "Always with a look at the main industries in tech, IT and Process management in order to be on top of the market",
          background: "https://imgur.com/DNXjdTJ.png",
        },
        {
          title: "Analytics",
          text:
            "Data driven decision making is our faith. No decision is maken without a look at actual data",
          background: "https://imgur.com/Rou077E.png",
        },
        {
          title: "Future",
          text:
            "With a focus on the future that will benefit and inspire the next generation of invationers",
          background: "https://imgur.com/lOScshY.png",
        },
        {
          title: "Augumenting Reality",
          text:
            "Our preferred technologies are Augmented and Mixed reality. We want to create a better, technological, reality.",
          background: "https://imgur.com/aE5AnGG.png",
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
