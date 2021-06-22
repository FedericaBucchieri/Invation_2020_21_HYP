<!-- Component that provide the structure for an object introduction, used either for people, products or areas.  -->
<template>
  <div class="container">
    <div class="row">
      <!-- Object main image -->
      <object-presentation-img :info="name" :img-path="imgPath">
      </object-presentation-img>
      <!-- Introduction paragraph -->
      <div
        class="right-text col-lg-6 col-md-12 col-sm-12 col-xs-12 overview-row"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <div class="title-object-overview">
          <h1>
            {{ name }}
          </h1>
        </div>
        <!-- introduction paragraph content -->
        <p>
          {{ overview }}
        </p>
        <hr />
        <!-- If used for product, each product can have also a list of tags (technology related tags).
        This tag bar contains the list of tags associated to the product (invation) -->
        <invation-tags-bar :tag-list="tags"></invation-tags-bar>
      </div>
    </div>
  </div>
</template>

<script>
import InvationTagsBar from "~/components/invation/InvationTagsBar.vue";
import ObjectPresentationImg from "~/components/baseElements/ObjectPresentationImg.vue";

export default {
  components: {
    ObjectPresentationImg,
    InvationTagsBar,
  },
  props: {
    // Name of the object to be displayed
    name: { type: String, default: () => "" },
    // Overview of the object to be displayed
    overview: { type: String, default: () => "" },
    // Path indicating the image to be displayed
    imgPath: { type: String, default: () => "" },
    // Object containing tags that could redirect to another section of the site (ex. invation -> its technology)
    // to be displayed together with the overview
    tags: { type: Array, default: () => [] },
  },
};
</script>

<style scoped>
.overview-row {
  align-self: center;
}
.title-object-overview {
  display: inline-flex;
  flex-wrap: wrap;
}

h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 0px;
  color: #191a20;
}
.star {
  margin-left: 50px;
  margin-top: 20px;
  font-size: 28px;
  cursor: pointer;
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

.container {
  margin-top: 100px;
}
</style>
