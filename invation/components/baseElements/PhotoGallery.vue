<template>
  <section class="section">
    <div class="container">
      <div class="center-heading">
        <h2>Get to know <em>Us</em></h2>
        <p>
          What about knowing better the <i>Team</i> behind your favourite
          <i>Invations</i>? Look at what they are doing and what they have done
        </p>
      </div>
    </div>
    <div class="container">
      <ul
        class="scrollable-gallery"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <li
          v-for="(item, itemIndex) of imgList"
          :key="'invation-card' + itemIndex"
          class="gallery-item"
        >
          <photo-gallery-item
            :name="item.name"
            :info="item.alt"
            :img-path="item.imgPath"
            :detail-page="item.detailPage"
          ></photo-gallery-item>
        </li>
      </ul>
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
}
</script>

<style scoped>
/* 
    My mission is to create a scrollable list with two elements
    in the row for the higher resolutions and just one scrollable
    element for the lower resolution. 
    --> flex 100% on the list item with @media max-width x
    --> flex 50% in normal conditions

*/

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
</style>
