<!-- Introductory element of the principal pages of the website -->
<template>
  <div
    id="welcome"
    class="welcome-invationers-area"
    :style="'background-image: url(' + bigImage + ');'"
  >
    <div class="header-text">
      <div class="container">
        <div class="row">
          <div
            class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <!-- Slot for the title of the page -->
            <h1><slot name="title"></slot></h1>
            <!-- Slot for the overview of the page -->
            <p>
              <slot name="overview"></slot>
            </p>
            <!-- button -->
            <a v-if="textButton.length > 0" class="main-button" :href="link"
              >{{ textButton }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Text to be displayed with the principle button of this component
    textButton: { type: String, default: () => "" },
    // Path indicating where the principle button of this component has to reference
    link: { type: String, default: () => "" },
    // Path indicating an image to be displayed
    bigImage: {
      type: String,
      default: () => "/banners/banner-rocket.png",
    },
  },
};
</script>

<style scoped>
.welcome-invationers-area {
  width: 100%;
  height: 100vh;
  min-height: 793px;
  background-repeat: no-repeat;
  background-position: right top;
}

.welcome-invationers-area .header-text .left-text {
  position: relative;
  align-self: center;
  margin-top: 35%;
  transform: perspective(1px) translateY(-30%) !important;
}

.welcome-invationers-area .header-text h1 em {
  font-style: normal;
  color: #fba70b;
}

.welcome-invationers-area .header-text p {
  font-weight: 300;
  font-size: 17px;
  color: #000;
  line-height: 30px;
  letter-spacing: 0.25px;
  margin-bottom: 40px;
  position: relative;
}

@media (max-width: 1420px) {
  .welcome-invationers-area .header-text {
    width: 70%;
    margin-left: 5%;
  }
}

@media (max-width: 1320px) {
  .welcome-invationers-area .header-text .left-text {
    margin-top: 50%;
  }
  .welcome-invationers-area .header-text {
    width: 50%;
    margin-left: 5%;
  }
}

@media (max-width: 1140px) {
  .welcome-invationers-area {
    height: auto;
  }
  .welcome-invationers-area .header-text {
    width: 92%;
    padding-top: 793px;
  }
  .welcome-invationers-area .header-text .left-text {
    margin-top: 5%;
    transform: none !important;
  }
}

@media (max-width: 810px) {
  .welcome-invationers-area {
    background-size: contain;
    margin-top: 15%;
  }
  .welcome-invationers-area .header-text {
    padding-top: 100%;
    margin-left: 0;
  }
  .container-fluid .col-md-12 {
    margin-right: 0px;
    padding-right: 0px;
  }
  h1 {
    font-size: xxx-large;
  }
}
</style>
