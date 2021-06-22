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
      :title="'What people say about Us '"
      :introduction="'Your opinions are important to us. That is why you can leave a review to all our invations and our team will carefull read all of them. Those are some of the favourite comments fans leaved to us.'"
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
      // used to render an image
      bigImage: "/banners/banner-astronauts.png",
      // Information used for the breadcrump functionalities
      pathsList: [
        {
          path: this.$route.path,
          pathName: "Invationers",
        },
      ],
      // Static objects used for the slideshow
      slideObjects: [
        {
          title: "Olivia Purple",
          text:
            '"Invation work is deligthful, I will spend hour on this website!"',
          background: "/testimonials/testimonial-image3.png",
        },
        {
          title: "Stella White",
          text:
            '"This team is amazing, so passionate, so strong, so unified. It is like a true family"',
          background: "/testimonials/testimonial-image4.png",
        },
        {
          title: "Jacob Green",
          text:
            '"It is incredible how much effort this invationers put in their job, well done!"',
          background: "/testimonials/testimonial-image2.png",
        },
        {
          title: "Scarlet Red",
          text:
            '"Graphics, responsivness and colors match perfectly the dynamis of the company"',
          background: "/testimonials/testimonial-image5.png",
        },
        {
          title: "Missy Blue",
          text:
            '"Hey guys, when are you going to open your headquarter door? Party!!!"',
          background: "/testimonials/testimonial-image1.png",
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
