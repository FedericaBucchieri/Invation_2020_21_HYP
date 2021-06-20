<template>
  <section id="invation_list" class="section">
    <div class="container">
      <div class="row">
        <div class="center-heading">
          <h2 class="area-title">{{ areaName }}</h2>
        </div>
        <div class="container-topic-description">
          {{ description }}
        </div>
        <div class="rounded-content">
          <!-- List start, example placeholders for products -->
          <ul>
            <li
              v-for="myContent in content"
              :key="myContent.name"
              class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <rounded-container
                :number-tag="myContent.numberTag"
                :displayTag="displayTags"
                :name="myContent.name"
                :description="myContent[descriptionName]"
                :image="myContent[imageName]"
                :typology="typology"
                :vision="myContent.vision"
                :id="myContent.id"
                :is-active-link="myContent.isActive"
              >
              </rounded-container>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Innovations list Ends ***** -->
</template>

<script>
import RoundedContainer from "~/components/baseElements/RoundedContainer.vue";

export default {
  components: { RoundedContainer },
  props: {
    areaName: { type: String, default: "" },
    content: {
      type: Array,
      default: () => [],
    },
    descriptionName: { type: String, default: "description" },
    imageName: { type: String, default: "thumbnail" },
    typology: { type: String, default: "" },
    description: { type: String, default: "" },
    displayTags: { type: Boolean, default: () => true },
  },
  data() {
    return {
      myContents: this.content,
    };
  },
};
</script>

<style scoped>
.area-title {
  margin-bottom: 15px;
}
.center-heading {
  width: 100%;
  text-align: center;
}
.rounded-content {
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10%;
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
.rounded-content > ul {
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

.container-topic-description {
  width: 80%;
  margin: 10px auto 30px auto;
  text-align: center;
}
</style>
