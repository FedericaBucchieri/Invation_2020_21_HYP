<template>
  <div class="content">
    <breadcrump :paths-list="pathsList" breadcrump-class="breadcrump-link">
    </breadcrump>
    <div class="left-image-decor"></div>
    <!--  Navigation handler for guided tour interactions among products of the same vision -->
    <navigation-guided-tour-handler
      :vision="invation.vision"
      :current-id="invation.id"
      :first-element-of-the-vision-id="otherInvations[0].id"
      :otherInvations="otherInvations"
    ></navigation-guided-tour-handler>
    <section>
      <!-- ***** Overview  ***** -->
      <object-overview
        :id="invation.id"
        :name="invation.name"
        :img-path="invation.image"
        :overview="invation.overview"
        :tags="invation.technologies"
        class="invation-overview"
      ></object-overview>
    </section>
    <!-- ***** Concept  ***** -->
    <section id="section1">
      <object-concept :concept="invation.concept"></object-concept>
    </section>
    <div class="right-image-decor"></div>
    <!-- Show More Button -->
    <div class="more">
      <a
        v-if="!showMore"
        href="#section2"
        class="main-button"
        @click="showMore = !showMore"
      >
        Show More
      </a>
      <a
        v-else
        href="#section1"
        class="main-button"
        @click="showMore = !showMore"
      >
        Show Less
      </a>
    </div>
    <!-- ***** More ***** -->
    <section v-if="showMore" id="section2">
      <hr />
      <object-video :video-url="invation.video"></object-video>
      <object-more :content="invation.more"></object-more>
      <hr />
    </section>
    <!-- ***** Leave a Review ***** -->
    <section id="reviews">
      <div class="container">
        <div class="row">
          <h2>Invation Reviews</h2>
          <invation-review-list
            :review-list="invation.reviews"
          ></invation-review-list>
          <h3>Leave your review here</h3>
          <form method="post" @submit="postReview">
            <label>Author:</label>
            <input
              v-model="reviewAuthor"
              type="text"
              name="author1"
              placeholder="Your username"
              required
            />
            <label>Review:</label>
            <textarea
              v-model="reviewBody"
              type="text"
              name="body"
              placeholder="Write your review here"
              spellcheck="true"
              required
            />
            <button type="submit" class="main-button">Send</button>
          </form>
        </div>
      </div>
    </section>
    <!-- ***** Invationers ***** -->
    <section id="invationers">
      <invationer-short-card-container
        :card-list="invation.invationers"
        :title="'Invationers that worked on this invation'"
        :typology="`invationers`"
      ></invationer-short-card-container>
    </section>
  </div>
</template>

<script>
import Breadcrump from "~/components/baseElements/Breadcrump.vue";
import ObjectOverview from "~/components/baseElements/ObjectOverview.vue";
import ObjectConcept from "~/components/baseElements/ObjectConcept.vue";
import ObjectVideo from "~/components/baseElements/ObjectVideo.vue";
import ObjectMore from "~/components/baseElements/ObjectMore.vue";
import InvationerShortCardContainer from "~/components/invationer/InvationerShortCardContainer.vue";
import InvationReviewList from "~/components/invation/InvationReviewList.vue";
import NavigationGuidedTourHandler from "~/components/invation/NavigationGuidedTourHandler.vue";

export default {
  components: {
    Breadcrump,
    ObjectOverview,
    ObjectConcept,
    ObjectVideo,
    ObjectMore,
    InvationerShortCardContainer,
    InvationReviewList,
    NavigationGuidedTourHandler,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params;
    const invationData = await $axios.get(
      `${process.env.BASE_URL}/api/invation/${id}`
    );
    const invation = invationData.data;

    const otherInvationsData = await $axios.get(
      `${process.env.BASE_URL}/api/invations_for_vision/${invation.vision.id}`
    );

    const otherInvations = otherInvationsData.data;
    return {
      invation,
      otherInvations,
    };
  },
  data() {
    return {
      pathsList: [
        {
          path: "/invations",
          pathName: "Invations",
        },
      ],
      showMore: false,
      review: {
        author: null,
        body: null,
        invation_id: 0,
      },
      reviewBody: "",
      reviewAuthor: "",
    };
  },
  head() {
    return {
      title: "Invation - " + this.invation.name,
      meta: [
        {
          name: "description",
          content: this.invation.description,
        },
        {
          hid: this.invation.name,
          name: this.invation.name,
          content: this.invation.concept,
        },
      ],
    };
  },
  mounted() {
    this.pathsList[1] = {
      path: `/invations/${this.invation.id}`,
      pathName: `${this.invation.name}`,
    };
  },
  methods: {
    postReview(e) {
      this.review.invation_id = this.invation.id;
      this.review.author = this.reviewAuthor;
      this.review.body = this.reviewBody;

      this.$axios
        .post(`${process.env.BASE_URL}/api/review`, this.review)
        .then((result) => {
          this.invation.reviews.push(result.data);
          this.reviewAuthor = "";
          this.reviewBody = "";
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.invation-overview {
  margin-top: 10px;
}

.more {
  text-align: center;
  margin: 50px 40px 80px 40px;
}

#section2 hr {
  width: 70%;
}

#invationers {
  margin-top: 10%;
}

#reviews {
  margin-bottom: 10%;
}

#reviews form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
}

#reviews input {
  width: 100%;
  margin: 10px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 10px;
}

#reviews textarea {
  width: 100%;
  height: 60%;
  margin: 10px;
  border-radius: 20px;
  border: none;
  padding: 15px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

#reviews label {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 0;
}

#reviews h2,
h3 {
  text-align: center;
  width: 100%;
}

#reviews h3 {
  margin-top: 40px;
}
</style>
