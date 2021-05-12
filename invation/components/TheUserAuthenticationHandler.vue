<template>
  <div id="loginForm" class="modal">
    <TheLoginForm v-if="isLogin" @switchForm="isLogin = !isLogin">
    </TheLoginForm>
    <TheRegistrationForm v-else @switchForm="isLogin = !isLogin">
    </TheRegistrationForm>
  </div>
</template>

<script>
import TheLoginForm from '~/components/TheLoginForm'
import TheRegistrationForm from '~/components/TheRegistrationForm'

export default {
  components: {
    TheLoginForm,
    TheRegistrationForm,
  },
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>

<style>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 30px;
}
</style>
