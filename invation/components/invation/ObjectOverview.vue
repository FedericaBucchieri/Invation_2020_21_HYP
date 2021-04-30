<template>
  <div class="container">
    <div class="row">
      <object-presentation-img :info="name" :img-path="imgPath">
      </object-presentation-img>

      <div
        class="right-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <h4><u>Innovations</u> > <u>Smart Space</u> > <u>MuseX</u></h4>
        <!-- missing how to implement Bread Crump -->
        <h1>{{ name }}</h1>
        <p>
          {{ overview }}
        </p>
        <hr />
        <base-tags-bar :tag-list="tags"></base-tags-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTagsBar from '~/components/baseElements/BaseTagsBar.vue'
import ObjectPresentationImg from '~/components/invation/ObjectPresentationImg.vue'

export default {
  components: {
    ObjectPresentationImg,
    BaseTagsBar,
  },
  props: {
    name: { type: String, default: () => '' },
    overview: { type: String, default: () => '' },
    imgPath: { type: String, default: () => '' },
    tags: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
}

h4 {
  font-size: 15px;
  line-height: 80px;
  letter-spacing: 1px;
  color: #191a20;
}

.left-text {
  position: relative;
  align-self: center;
  margin-top: 35%;
  transform: perspective(1px) translateY(-30%) !important;
}
</style>
