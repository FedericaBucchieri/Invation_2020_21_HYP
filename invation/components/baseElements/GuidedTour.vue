<template>
  <div>
    <div class="container">
      <div
        v-for="item in firstItemsGuidedTour"
        :key="item.item.numberTag"
        class="row"
      >
        <guided-tour-item :item="item" :typology="typology"></guided-tour-item>
      </div>
    </div>
    <!-- <iframe
      class="video-frame"
      :src="video"
      data-scroll-reveal="enter top move 30px over 0.6s after 0.4s"
    ></iframe> -->
    <div class="left-image-decor"></div>
    <div class="container">
      <div
        v-for="item in secondItemsGuidedTour"
        :key="item.item.numberTag"
        class="row"
      >
        <guided-tour-item :item="item" :typology="typology"></guided-tour-item>
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
    items: {
      type: Array,
      default: () => [],
    },
    typology: { type: String, default: () => '' },
  },
  data() {
    return {
      myItems: [],
      firstItemsGuidedTour: [],
      secondItemsGuidedTour: [],
    }
  },
  mounted() {
    const splitAt = Math.ceil(this.items.length / 2)
    let startingId = this.items[0].id
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id < startingId) {
        startingId = this.items[i].id
      }
    }
    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items.length; j++) {
        if (this.items[j].id === startingId + i) {
          this.myItems[i] = this.items[j]
          break
        }
      }
    }
    for (let i = 0; i < splitAt; i++) {
      const newItem = {
        item: this.myItems[i],
        right: i % 2 === 0,
      }
      this.firstItemsGuidedTour.push(newItem)
    }
    for (let i = splitAt; i < this.myItems.length; i++) {
      const newItem = {
        item: this.myItems[i],
        right: i % 2 === 0,
      }
      this.secondItemsGuidedTour.push(newItem)
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
