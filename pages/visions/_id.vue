<!-- Page for the vision area (vision) -->
<template>
  <div>
    <!-- Orientation info component -->
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <!-- Decorative image -->
    <div class="left-image-decor"></div>
    <!-- Vision introduction section -->
    <section id="introduction" class="section">
      <object-overview
        :name="vision.name"
        :img-path="vision.bigImage"
        :overview="vision.description"
      >
      </object-overview>
    </section>
    <!-- Decorative image -->
    <div class="right-image-decor"></div>

    <!-- Introduction to the  list of products -->
    <section id="products-intro">
      <div class="container">
        <div class="row products-list-intro">
          <h2>Inside this vision: the invations</h2>
          <p>
            Dive in into this <b>Area of products</b> with the
            <i>list of our invations</i>: a set of
            <u>innovative products</u> that better express the vision the
            Invation has over the chosen theme. In this case it is all related
            to {{ vision.name }} so in this section you will find a
            <u>list of products</u> related only to this topic.
          </p>
        </div>
      </div>
    </section>

    <!-- list of product section -->
    <section id="innovations" class="section">
      <!-- Tour inside the vision products -->
      <vision-guided-tour
        :items="vision.invations"
        typology="invations"
      ></vision-guided-tour>
    </section>
    <!-- Invationers related to the vision - section -->
    <section id="invationers">
      <invationer-short-card-container
        :title="'Responsible of the Vision ' + vision.name"
        :card-list="vision.invationers"
      >
      </invationer-short-card-container>
    </section>
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import VisionGuidedTour from "../../components/vision/VisionGuidedTour.vue";
import ObjectOverview from "../../components/baseElements/ObjectOverview.vue";
import InvationerShortCardContainer from "~/components/invationer/InvationerShortCardContainer.vue";
export default {
  components: {
    Breadcrump,
    ObjectOverview,
    VisionGuidedTour,
    InvationerShortCardContainer,
  },
  // Get all the selected vision details (with relative products and people)
  async asyncData({ $axios, route }) {
    const { id } = route.params;
    const visionData = await $axios.get(
      `${process.env.BASE_URL}/api/visions/${id}`
    );
    const vision = visionData.data;
    return {
      vision,
    };
  },
  data() {
    return {
      // Information used for the breadcrump functionalities
      pathsList: [
        {
          path: "/visions",
          pathName: "Visions",
        },
      ],
    };
  },
  // Mounted properties for breadcrump implementation
  mounted() {
    this.pathsList.push({
      path: `/visions/${this.vision.id}`,
      pathName: `${this.vision.name}`,
    });
  },
  head() {
    return {
      title: "Invation - " + this.vision.name,
      meta: [
        {
          name: "description",
          content: this.vision.description,
        },
        {
          hid: this.vision.numberTag,
          name: this.vision.name,
          content: this.vision.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
#introduction .left-image {
  align-self: center;
}

#introduction .right-text ul {
  padding: 0;
  margin: 0;
}

#introduction .right-text ul li {
  display: inline-block;
  margin-bottom: 60px;
}

#introduction .right-text ul li:last-child {
  margin-bottom: 0px;
}

#introduction .right-text img {
  display: inline-block;
  margin-right: 30px;
}

#introduction .right-text h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-top: 80px;
  margin-bottom: 30px;
  color: #191a20;
}

#introduction .right-text h1 em {
  font-style: normal;
  color: #fba70b;
}

#introduction .right-text h4 {
  font-size: 15px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
}

.products-list-intro {
  text-align: center;
  margin: 50px 0px;
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.products-list-intro p {
  margin: 0px 10%;
}

.products-list-intro h2 {
  text-align: center;
  width: 100%;
}
</style>
