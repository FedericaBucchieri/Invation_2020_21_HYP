<template>
  <div>
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- ***** Welcome area start ***** -->
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
    <!-- ***** Welcome area end ***** -->

    <!-- ***** All entities area starts ***** -->
    <section id="invations">
      <content-rounded-containers
        :content="invations"
        area-name="The invations"
        description-name="overview"
        research-id=""
        typology="invations"
        :displayTags="false"
      ></content-rounded-containers>
    </section>
    <!-- ***** All entities area ends ***** -->
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
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/invations`);
    const invations = data;
    return {
      invations,
    };
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
};
</script>

<style>
#invationers {
  padding-top: 150px;
  margin-top: 00px;
}
</style>
