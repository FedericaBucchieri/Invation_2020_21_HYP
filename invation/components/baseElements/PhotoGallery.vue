<template>
  <section id="team" class="section">
    <!-- using fontawesome to insert some icon, the key is property of Lorenzo Cocchia -->
    <script
      src="https://kit.fontawesome.com/2e5a3bbfe7.js"
      crossorigin="anonymous"
    ></script>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="center-heading">
            <h2>Get to know <em>Us</em></h2>
            <p>
              What about knowing better the <i>Team</i> behind your favourite
              <i>Invations</i>? Look at what they are doing and what they have
              done
            </p>
          </div>
        </div>
        <div
          class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big test"
          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
        >
          <div class="owl-carousel owl-theme owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div id="owl-stage" class="owl-stage">
                <div
                  v-for="(item, itemIndex) of imgList"
                  :key="'invation-card' + itemIndex"
                  class="owl-item active"
                  style="width: 445px; margin-right: 30px"
                >
                  <div class="item service-item">
                    <div class="team-content">
                      <photo-gallery-item
                        :name="item.name"
                        :info="item.alt"
                        :img-path="item.imgPath"
                        :detail-page="item.detailPage"
                      ></photo-gallery-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-nav">
              <button
                class="owl-next"
                type="button"
                role="presentation"
                @click="scrollGallery(true)"
              >
                <span aria-label="Next">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
              <button
                class="owl-prev"
                type="button"
                role="presentation"
                @click="scrollGallery(false)"
              >
                <span aria-label="Previous">
                  <i class="fas fa-arrow-left"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoGalleryItem from '~/components/baseElements/PhotoGalleryItem.vue'

export default {
  components: {
    PhotoGalleryItem,
  },
  props: {
    imgList: { type: Array, default: () => [] },
  },
  methods: {
    scrollGallery(isNext) {
      const stage = document.getElementById('owl-stage')

      if (isNext) {
        stage.style.transform = 'translate3d(-500px, 0px, 0px)'
      } else {
        stage.style.transform = 'translate3d(500px, 0px, 0px)'
      }
    },
  },
}
</script>

<style scoped>
@media (max-width: 900px) {
  .owl-carousel .owl-stage-outer {
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .owl-nav {
    display: none;
  }

  .owl-stage {
    width: 100%;
  }
}
@media screen and (min-width: 900px) {
  .owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    /* fix for flashing background */
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
}

.fas {
  color: white;
}

.owl-stage {
  width: 3000px;
  transform: translate3d(0px, 0px, 0px);
  transition: all 0.25s ease 0.25s;
}

.scrollable-gallery {
  width: 100%;
  height: 70vh;
  background: #f4813f;
  border: 1px solid #000;
  overflow-x: auto;
  white-space: nowrap;
}

.gallery-item {
  justify-content: center;
  align-items: center;
  width: 40%;
  height: auto;
  margin: 5%;
  margin-left: auto;
  margin-right: auto;
}

.center-heading {
  margin: 5%;
}

.center-heading h2 {
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 25px;
}

.center-heading h2 em {
  font-style: normal;
  color: #f4813f;
}

.center-heading p {
  font-size: 15px;
  color: #888;
  text-align: center;
}

.item .team-content {
  background: linear-gradient(145deg, #eee 0%, #f5f5f5 100%);
  margin-left: 60px;
  padding: 40px 30px;
  text-align: center;
  border-radius: 5px;
}

.owl-carousel .owl-item img {
  display: block;
  width: 100%;
  height: auto;
}

.owl-carousel .owl-nav button.owl-next span {
  z-index: 0;
  top: 45%;
  border-radius: 10px;
  font-size: 46px;
  color: #fff;
  right: -210px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: inline-block;
  background: rgb(244, 129, 63);
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  position: absolute;
}

.owl-carousel .owl-nav button.owl-prev span {
  z-index: 0;
  top: 30%;
  border-radius: 10px;
  font-size: 46px;
  color: #fff;
  right: -150px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  display: inline-block;
  background: rgb(244, 129, 63);
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  position: absolute;
}

@media screen and (max-width: 1060px) {
  .owl-carousel .owl-nav {
    display: none !important;
  }
}

.owl-carousel {
  display: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  /* position relative and z-index fix webkit rendering fonts issue */
  position: relative;
}
.owl-carousel .owl-stage {
  position: relative;
  -ms-touch-action: pan-Y;
  touch-action: manipulation;
  -moz-backface-visibility: hidden;
  /* fix firefox animation glitch */
}
.owl-carousel .owl-stage:after {
  content: '.';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.owl-carousel .owl-wrapper,
.owl-carousel .owl-item {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
}
.owl-carousel .owl-item {
  position: relative;
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

.owl-carousel .owl-nav.disabled,
.owl-carousel .owl-dots.disabled {
  display: none;
}
.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel .owl-nav button.owl-prev,
.owl-carousel .owl-nav button.owl-next,
.owl-carousel button.owl-dot {
  background: none;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
}
.owl-carousel.owl-loaded {
  display: block;
}
.owl-carousel.owl-loading {
  opacity: 0;
  display: block;
}
.owl-carousel.owl-hidden {
  opacity: 0;
}
.owl-carousel.owl-refresh .owl-item {
  visibility: hidden;
}
.owl-carousel.owl-drag .owl-item {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel.owl-grab {
  cursor: move;
  cursor: grab;
}
.owl-carousel.owl-rtl {
  direction: rtl;
}
.owl-carousel.owl-rtl .owl-item {
  float: right;
}

/* No Js */
.no-js .owl-carousel {
  display: block;
}

/*
 *  Owl Carousel - Animate Plugin
 */
.owl-carousel .animated {
  animation-duration: 1000ms;
  animation-fill-mode: both;
}

.owl-carousel .owl-animated-in {
  z-index: 0;
}

.owl-carousel .owl-animated-out {
  z-index: 1;
}

.owl-carousel .fadeOut {
  animation-name: fadeOut;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/*
 * 	Owl Carousel - Auto Height Plugin
 */
.owl-height {
  transition: height 500ms ease-in-out;
}

/*
 * 	Owl Carousel - Lazy Load Plugin
 */
.owl-carousel .owl-item {
  /**
			This is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong
			calculation of the height of the owl-item that breaks page layouts
		 */
}
.owl-carousel .owl-item .owl-lazy {
  opacity: 0;
  transition: opacity 400ms ease;
}
.owl-carousel .owl-item .owl-lazy[src^=''],
.owl-carousel .owl-item .owl-lazy:not([src]) {
  max-height: 0;
}
.owl-carousel .owl-item img.owl-lazy {
  transform-style: preserve-3d;
}

/*
 * 	Owl Carousel - Video Plugin
 */
.owl-carousel .owl-video-wrapper {
  position: relative;
  height: 100%;
  background: #000;
}

.owl-carousel .owl-video-play-icon {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  /* background: url('owl.video.play.png') no-repeat; */
  cursor: pointer;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  transition: transform 100ms ease;
}

.owl-carousel .owl-video-play-icon:hover {
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
}

.owl-carousel .owl-video-playing .owl-video-tn,
.owl-carousel .owl-video-playing .owl-video-play-icon {
  display: none;
}

.owl-carousel .owl-video-tn {
  opacity: 0;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 400ms ease;
}

.owl-carousel .owl-video-frame {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}

/* .owl-carousel {
  display: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 1;
}

.owl-stage-outer {
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0px, 0px, 0px);
}

.owl-stage {
  width: 3200px;
  transform: translate3d(-1200px, 0px, 0px);
  transition: all 0s ease 0s;
} */
</style>
