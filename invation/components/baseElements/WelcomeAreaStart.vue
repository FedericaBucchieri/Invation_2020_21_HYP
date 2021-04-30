<template>
  <div class="welcome-invationers-area" id="welcome">
    <!-- ***** Header Text Start ***** -->
    <div class="header-text">
      <div class="container">
        <div class="row">
          <div
            class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <h4>
              <u>{{ title }}</u>
            </h4>
            <h1>{{ subtitle }}</h1>
            <p>
              {{ summary }}
            </p>
            <a class="main-button-slider">{{ buttonText }} </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Header Text End ***** -->
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    summary: { type: String, default: () => '' },
    buttonText: { type: String, default: () => '' },
  },
}
</script>

<style></style>
