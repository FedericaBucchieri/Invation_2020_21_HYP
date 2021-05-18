<template>
  <div id="welcome" class="welcome-invationers-area">
    <div class="header-text">
      <div class="container">
        <div class="row">
          <div
            class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <the-breadcrump
              :paths-list="pathsList"
              breadcrump-class="breadcrump-link"
            >
            </the-breadcrump>
            <h1><slot name="title"></slot></h1>
            <p>
              <slot name="overview"></slot>
            </p>
            <a
              v-if="textButton.length > 0"
              class="main-button-slider"
              :href="link"
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
    textButton: { type: String, default: () => '' },
    link: { type: String, default: () => '' },
    pathsList: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
a.main-button-slider {
  font-size: 14px;
  border-radius: 25px;
  padding: 15px 25px;
  background-color: #fba70b;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

a.main-button-slider:hover {
  background-color: #f1556a;
}
.welcome-invationers-area {
  width: 100%;
  height: 100vh;
  min-height: 793px;
  background-image: url(static/banners/banner-rocket.png);
  background-repeat: no-repeat;
  background-position: right top;
}

.welcome-invationers-area .header-text .left-text {
  position: relative;
  align-self: center;
  margin-top: 35%;
  transform: perspective(1px) translateY(-30%) !important;
}

.welcome-invationers-area .header-text h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
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
  }
  .welcome-invationers-area .header-text {
    padding-top: 100%;
    margin-left: 0;
  }
  .container-fluid .col-md-12 {
    margin-right: 0px;
    padding-right: 0px;
  }
}
</style>
