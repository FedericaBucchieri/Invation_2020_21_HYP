<template>
  <div>
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- ***** Welcome area start ***** -->
    <welcome-area-start
      :text-button="'DISCOVER OUR INVATIONERS'"
      :link="'#invationers'"
      :big-image="bigImage"
    >
      <template #title>
        Our people:<br />
        <em>The invationers</em>
      </template>
      <template #overview>
        A Multicultural, dynamic team that we use to call family. The
        <b>Invationers</b> are Software Engineers, Designer, Managers,
        Communications experts and more. Inside the <i>team</i>, we exploit
        synergies among different backgrounds. Learning by doing is part of the
        job, growing together is our mission.
      </template>
    </welcome-area-start>
    <!-- ***** Welcome area end ***** -->

    <!--**** Photogallery area starts ****-->
    <decoration-slide-show
      :slide-objects="slideObjects"
      :title="slideObjectTitle"
      :introduction="slideObjectIntro"
    ></decoration-slide-show>
    <!--**** Photogallery area ends ****-->

    <!-- ***** All entities area starts ***** -->
    <section id="invationers">
      <invationer-short-card-container
        :card-list="invationers"
        title="The invationers"
        typology="invationers"
      ></invationer-short-card-container>
    </section>
    <!-- ***** All entities area ends ***** -->
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";
import InvationerShortCardContainer from "~/components/invationer/InvationerShortCardContainer.vue";

export default {
  components: {
    Breadcrump,
    WelcomeAreaStart,
    InvationerShortCardContainer,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/invationers`
    );
    const invationers = data;
    return {
      invationers,
    };
  },
  data() {
    return {
      bigImage: "/banners/banner-astronauts.png",
      pathsList: [
        {
          path: this.$route.path,
          pathName: "Invationers",
        },
      ],
      slideObjects: [
        {
          title: "Olivia Purple",
          text:
            '"Invation work is deligthful, I will spend hour on this website!"',
          background: "https://imgur.com/CtzuCKT.png",
        },
        {
          title: "Stella White",
          text:
            '"This team is amazing, so passionate, so strong, so unified. It is like a true family"',
          background: "https://imgur.com/IDFoDB4.png",
        },
        {
          title: "Jacob Green",
          text:
            '"It is incredible how much effort this invationers put in their job, well done!"',
          background: "https://imgur.com/BgP0tZN.png",
        },
        {
          title: "Scarlet Red",
          text:
            '"Graphics, responsivness and colors match perfectly the dynamis of the company"',
          background: "https://imgur.com/QU3KM3t.png",
        },
        {
          title: "Missy Blue",
          text:
            '"Hey guys, when are you going to open your headquarter door? Party!!!"',
          background: "https://imgur.com/9088YPF.png",
        },
      ],
    };
  },
  head() {
    return {
      title: "Invation - All invationers",
      meta: [
        {
          name: "description",
          content: "All the invationers of the Invation Team",
        },
        {
          hid: "all invationers",
          name: "all invationers",
          content: "all invationers overview and team member presentation",
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
