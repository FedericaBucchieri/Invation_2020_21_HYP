<template>
  <div>
    <div class="container">
      <div
        v-for="invation in firstInvationsGuidedTour"
        :key="invation.invation.numberTag"
        class="row"
      >
        <guided-tour-item
          :right="invation.right"
          :title="invation.invation.name"
          :subtitle="invation.invation.subtitle"
          :overview="invation.invation.overview"
          :image="invation.invation.image"
          :number-tag="invation.invation.numberTag"
        ></guided-tour-item>
      </div>
    </div>
    <iframe
      class="video-frame"
      :src="video"
      data-scroll-reveal="enter top move 30px over 0.6s after 0.4s"
    ></iframe>
    <div class="container">
      <div
        v-for="invation in secondInvationsGuidedTour"
        :key="invation.invation.numberTag"
        class="row"
      >
        <guided-tour-item
          :right="invation.right"
          :title="invation.invation.name"
          :subtitle="invation.invation.subtitle"
          :overview="invation.invation.overview"
          :image="invation.invation.image"
          :number-tag="invation.invation.numberTag"
        ></guided-tour-item>
      </div>
    </div>
  </div>
</template>

<script>
import GuidedTourItem from './GuidedTourItem'
export default {
  components: { GuidedTourItem },
  props: {
    video: { type: String, default: () => '' },
    invations: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      firstInvationsGuidedTour: [],
      secondInvationsGuidedTour: [],
    }
  },
  mounted() {
    const splitAt = Math.ceil(this.invations.length / 2)
    for (let i = 0; i < splitAt; i++) {
      const newInvation = {
        invation: this.invations[i],
        right: i % 2 === 0,
      }
      this.firstInvationsGuidedTour.push(newInvation)
    }
    for (let i = splitAt; i < this.invations.length; i++) {
      const newInvation = {
        invation: this.invations[i],
        right: i % 2 === 0,
      }
      this.secondInvationsGuidedTour.push(newInvation)
    }
  },
}
</script>

<style scoped>
.video-frame {
  width: 100%;
  height: 400px;
  margin-bottom: 100px;
}
</style>
