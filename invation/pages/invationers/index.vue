<template>
  <the-intro-page
    text-button="DISCOVER INVATIONERS"
    area-name="Our team"
    general-link="invationers"
    :bigImage="bigImage"
    :paths-list="pathsList"
    :slideObjects="slideObjects"
    :slideObjectTitle="'What people say about Us '"
    :slideObjectIntro="'Your opinions are important to us. That is why you can leave a review to all our invations and our team will carefull read all of them. Those are some of the favourite comments fans leaved to us.'"
  >
    <template #welcome-title> Our team: <em>The invationers</em> </template>
    <template #welcome-overview>
      A Multicultural, dynamic team that we use to call family. The
      <b>Invationers</b> are Software Engineers, Designer, Managers,
      Communications experts and more. Inside the <i>team</i>, we exploit
      synergies among different backgrounds. Learning by doing is part of the
      job, growing together is our mission.
    </template>
    <template #entitiesList="slotProps">
      <short-card-container
        :card-list="slotProps.entities"
        title="The invationers"
        typology="invationers"
      ></short-card-container>
    </template>
  </the-intro-page>
</template>

<script>
import TheIntroPage from '~/components/TheIntroPage'
import ShortCardContainer from '~/components/baseElements/ShortCardContainer.vue'

export default {
  components: {
    TheIntroPage,
    ShortCardContainer,
  },
  props: {
    entities: { type: Array, default: () => [] },
  },
  data() {
    return {
      bigImage: '/banners/banner-astronauts.png',
      pathsList: [
        {
          path: this.$route.path,
          pathName: 'Invationers',
        },
      ],
      slideObjects: [
        {
          title: 'Olivia Purple',
          text:
            '"Invation work is deligthful, I will spend hour on this website!"',
          background: 'https://imgur.com/CtzuCKT.png',
        },
        {
          title: 'Stella White',
          text:
            '"This team is amazing, so passionate, so strong, so unified. It is like a true family"',
          background: 'https://imgur.com/IDFoDB4.png',
        },
        {
          title: 'Jacob Green',
          text:
            '"It is incredible how much effort this invationers put in their job, well done!"',
          background: 'https://imgur.com/BgP0tZN.png',
        },
        {
          title: 'Scarlet Red',
          text:
            '"Graphics, responsivness and colors match perfectly the dynamis of the company"',
          background: 'https://imgur.com/QU3KM3t.png',
        },
        {
          title: 'Missy Blue',
          text:
            '"Hey guys, when are you going to open your headquarter door? Party!!!"',
          background: 'https://imgur.com/9088YPF.png',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Invation - All invationers',
      meta: [
        {
          name: 'description',
          content: 'All the invationers of the Invation Team',
        },
        {
          hid: 'all invationers',
          name: 'all invationers',
          content: 'all invationers overview and team member presentation',
        },
      ],
    }
  },
}
</script>

<style></style>
