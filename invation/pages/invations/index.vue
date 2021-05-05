<template>
  <the-intro-page
    :text-button="'DISCOVER INVATIONS TECHNOLOGIES'"
    :area-name="'Our invations'"
    :general-link="'invations'"
  >
    <template #welcome-title>
      Our innovations: <em>The invations</em>
    </template>
    <template #welcome-overview>
      Here you can find the complete list of all our invations: innovative
      inventions and ideas to shape a new concrete concept of future
    </template>
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
