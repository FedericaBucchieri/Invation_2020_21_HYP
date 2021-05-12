<template>
  <section id="invation_list" class="section">
    <div class="container">
      <div class="row">
        <h2 class="area-title">{{ areaName }}</h2>

        <!-- List start, example placeholders for products -->
        <ul id="visionUL">
          <li
            v-for="myContent in myContents"
            :key="myContent.name"
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <rounded-container
              :number-tag="myContent.numberTag"
              :name="myContent.name"
              :description="myContent.description"
              :image="myContent.image"
              :typology="myContent.typology"
            >
            </rounded-container>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- ***** Innovations list Ends ***** -->
</template>

<script>
import RoundedContainer from '~/components/vision/RoundedContainer.vue'

export default {
  components: { RoundedContainer },
  props: {
    areaName: { type: String, default: '' },
    content: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      myContents: this.content,
    }
  },
}
</script>

<style scoped>
.area-title {
  margin-bottom: 15px;
}
section {
  margin: 0;
  padding: 0;
  padding-bottom: 5%;
  padding-top: 5%;
  border: 0;
  outline: 0;
  display: block;
}
#visionUL {
  width: 100%;
  display: contents;
}
#invation_list input {
  width: 80%;
  margin: 30px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 20px;
}

#invation_list h2 {
  width: 100%;
  text-align: center;
}

#invation_list .features-item {
  height: 550px;
  margin-bottom: 20px;
}

#invation_list .main-button {
  position: absolute;
  bottom: 40px;
  right: 25%;
  left: 25%;
}

#invation_list img {
  border-radius: 50%;
}
</style>
