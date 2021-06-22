<!-- Component used to modelize a SlideShow of cards, paired with radio type input to swith from a card to the others. -->
<template>
  <section id="slideshow">
    <!-- Decoration images, background purposes -->
    <div class="right-image-decor"></div>
    <div class="left-image-decor"></div>

    <!-- Start of the slideshow: title -->
    <h2>{{ title }}</h2>
    <!-- Intro to the slideshow topics -->
    <p class="intro">{{ introduction }}</p>

    <!-- Start of Slide objects code-->
    <div class="slide-objects">
      <!-- Inputs for managing switch between slides. 
      Those input are not paired with explicit labels because the content 
      of the slide show and the card positioning is - in our opinion - self-explainatory.
       The absence of the labels is not inpacting neither accessibility or user experience. -->
      <input
        v-for="(item, itemIndex) of slideObjects"
        :key="'slide-item-input' + itemIndex"
        type="radio"
        :name="'position'"
        :checked="itemIndex === 2"
      />
      <!-- Actual body of the slideshow container -->
      <main id="carousel">
        <!-- Slideshow cards -->
        <div
          v-for="(item, itemIndex) of slideObjects"
          :key="'slide-item' + itemIndex"
          class="item"
          :style="{ 'background-image': 'url(' + item.background + ')' }"
        >
          <div class="slide-title">{{ item.title }}</div>
          <p>{{ item.text }}</p>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // The array of objects to be displayed in the slideShows, containing the title and the body of the slide, together with the slide background image url
    slideObjects: { type: Array, default: () => [] },
    // Title of the slideShow
    title: { type: String, default: () => "" },
    // Introduction to the slideshow content
    introduction: { type: String, default: () => "" },
  },
};
</script>

<style>
#slideshow .intro {
  text-align: center;
  width: 50%;
  margin: auto;
}
.slide-objects {
  height: 600px;
  margin: 0;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
}

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
}

div.item {
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: coral;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
  background-size: cover;
  padding: 15px;
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-color: #90f1ef;
}
div.item:nth-of-type(2) {
  --offset: 2;
  background-color: #ff70a6;
}
div.item:nth-of-type(3) {
  --offset: 3;
  background-color: #ff9770;
}
div.item:nth-of-type(4) {
  --offset: 4;
  background-color: #ffd670;
}
div.item:nth-of-type(5) {
  --offset: 5;
  background-color: #e9ff70;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}

.slide-objects .slide-title {
  color: white;
  font-weight: 700;
  font-size: 24px;
  margin-top: 90%;
}

.slide-objects p {
  color: white;
}

label {
  display: none;
}
</style>
