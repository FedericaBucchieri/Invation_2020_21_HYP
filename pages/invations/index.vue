<!--  All invations page - group introductory page -->
<template>
  <div>
    <!-- Orientation Info -->
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!--  Group introduction, welcome area -->
    <welcome-area-start
      :text-button="'DISCOVER OUR INVATIONS'"
      :link="'#invations'"
      :big-image="bigImage"
    >
      <template #title> Our products: <br /><em>The invations</em> </template>
      <template #overview>
        Here you can find the <b>complete list</b> of <u>all our invations</u>:
        innovative inventions and ideas to shape a new concrete concept of
        <i>future</i>.
      </template>
    </welcome-area-start>
    <!--  Welcome area end  -->

    <!-- All products area - list, start -->
    <section id="invations">
      <content-rounded-containers
        :content="invations"
        area-name="The invations"
        description-name="overview"
        typology="invations"
        :displayTags="false"
        :description="'Discover all our products'"
      ></content-rounded-containers>
    </section>
    <!--  All products area ends  -->
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";
import ContentRoundedContainers from "~/components/baseElements/ContentRoundedContainers.vue";

export default {
  components: {
    Breadcrump,
    WelcomeAreaStart,
    ContentRoundedContainers,
  },
  // Get all invations
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/invations`);
    const invations = data;
    return {
      invations,
    };
  },
  data() {
    return {
      // Used to render an image
      bigImage: "/banners/banner-olo.png",
      // Information used for the breadcrump functionalities
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
