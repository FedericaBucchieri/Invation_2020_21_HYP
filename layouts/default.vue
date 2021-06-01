<template>
  <div>
    <TheHeader />
    <TheUserAuthenticationHandler />
    <the-chat :chat-list="list" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheChat from '~/components/TheChat.vue'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    TheChat,
  },
  mixins: [MMCCMixin],
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: #fff;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 810px) {
  .row {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
