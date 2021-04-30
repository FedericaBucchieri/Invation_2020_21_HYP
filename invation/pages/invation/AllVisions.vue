<template>
  <div>
    <!-- ***** Welcome Area Start ***** -->
    <WelcomeAreaStart>
      :title="visions.title" :subtitle="visions.subtitle"
      :summary="visions.summary" :buttonText="visions.buttonText" >
    </WelcomeAreaStart>

    <ContentRoundedContainers> </ContentRoundedContainers>
  </div>
</template>

<script>
import WelcomeAreaStart from '~/components/baseElements/WelcomeAreaStart.vue'
import ContentRoundedContainers from '~/components/Vision/ContentRoundedContainers'

export default {
  components: [WelcomeAreaStart, ContentRoundedContainers],
}
</script>

<style></style>
