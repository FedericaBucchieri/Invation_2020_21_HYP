<template>
  <the-intro-page
    :text-button="'DISCOVER INVATIONERS ROLES'"
    :area-name="'Our team'"
    :general-link="'invationers'"
    :has-overlay="!!parseInt(1)"
  >
    <template #welcome-title> Our team: <em>The invationers</em> </template>
    <template #welcome-overview>
      A Multicultural, dynamic team that we use to call family. The
      <b>Invationers</b> are Software Engineers, Designer, Managers,
      Communications experts and more. Inside the <i>team</i>, we exploit
      synergies among different backgrounds. Learning by doing is part of the
      job, growing together is our mission.
    </template>
    <template #overlay-title
      >The difference between success and failure is a great team.</template
    >
    <template #overlay-img
      ><img src="~/static/invationers/team_banner.png" alt="group picture"
    /></template>
  </the-intro-page>
</template>

<script>
import TheIntroPage from '~/components/TheIntroPage'

export default {
  components: {
    TheIntroPage,
  },
}
</script>

<style></style>
