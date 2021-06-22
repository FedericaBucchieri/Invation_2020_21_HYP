<!-- Page for Products divided by technologies -->
<template>
  <div>
    <!-- Orientation info component -->
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- Introduction element -->
    <welcome-area-start :bigImage="'/banners/banner-agumented.png'">
      <template #title> Explore our <em>Technologies</em></template>
      <template #overview>
        Our <i>Visionary</i> ideas are based on the latest <br />
        <b>Technologies</b>. Look which one of those is exploited <br />
        by our <i>Invations</i>. Under each <b>Technology</b> you can <br />
        find the related <i>Invations</i>
      </template>
    </welcome-area-start>
    <!-- Each technology container with realteive products -->
    <section id="technologies">
      <div
        v-for="technology in technologies"
        :key="technology.id"
        :id="technology.relatedPath"
      >
        <span></span>
        <!-- list of product for the single technology -->
        <content-rounded-containers
          :area-name="technology.name"
          :content="technology.invations"
          :description="technology.description"
          description-name="overview"
          :typology="'invations'"
          :displayTags="false"
        >
        </content-rounded-containers>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";
import ContentRoundedContainers from "~/components/baseElements/ContentRoundedContainers";

export default {
  components: {
    Breadcrump,
    WelcomeAreaStart,
    ContentRoundedContainers,
  },
  // Get all technologies with relative products
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/technologies`
    );
    const technologies = data;
    return {
      technologies,
    };
  },
  data() {
    return {
      // Information used for the breadcrump functionalities
      pathsList: [
        {
          path: "/invations",
          pathName: "Invations",
        },
        {
          path: "/invations/technologies",
          pathName: "Invations by technologies",
        },
      ],
    };
  },
};
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
