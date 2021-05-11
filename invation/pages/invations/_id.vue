<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <section>
      <!-- ***** Overview  ***** -->
      <object-overview
        :id="invation.id"
        :name="invation.name"
        :img-path="invation.image"
        :overview="invation.overview"
        :tags="invation.technologies"
        :is-savable="true"
        :is-saved="isSaved"
      ></object-overview>
    </section>
    <!-- ***** Concept  ***** -->
    <section id="section1">
      <object-concept :concept="invation.concept"></object-concept>
    </section>
    <div class="right-image-decor"></div>
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
    <!-- ***** Invationers ***** -->
    <section id="invationers">
      <invartioner-short-card-container
        :card-list="invation.invationers"
        :title="'Invationers that worked on this innovation'"
      ></invartioner-short-card-container>
    </section>
    <!-- ***** Leave a Review ***** -->
    <section id="reviews">
      <div class="container">
        <div class="row">
          <h2>Invation Reviews</h2>
          <base-review-list :review-list="invation.reviews"></base-review-list>
          <h3>Leave your review here</h3>
          <form method="post" @submit="postReview">
            <label>Author:</label>
            <input
              v-model="reviewAuthor"
              type="text"
              name="author"
              placeholder="Your username"
            />
            <label>Review:</label>
            <textarea
              v-model="reviewBody"
              type="text"
              name="body"
              placeholder="Write your review here"
            />
            <button type="submit" class="main-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ObjectOverview from '~/components/baseElements/ObjectOverview.vue'
import ObjectConcept from '~/components/baseElements/ObjectConcept.vue'
import ObjectVideo from '~/components/baseElements/ObjectVideo.vue'
import ObjectMore from '~/components/baseElements/ObjectMore.vue'
import InvartionerShortCardContainer from '~/components/invationer/InvartionerShortCardContainer.vue'
import BaseReviewList from '~/components/baseElements/BaseReviewList.vue'

export default {
  components: {
    ObjectOverview,
    ObjectConcept,
    ObjectVideo,
    ObjectMore,
    InvartionerShortCardContainer,
    BaseReviewList,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/invation/${id}`
    )
    const invation = data
    return {
      invation,
    }
  },
  data() {
    return {
      showMore: false,
      review: {
        author: null,
        body: null,
        invation_id: 0,
      },
      reviewAuthor: '',
      reviewBody: '',
    }
  },
  head() {
    return {
      title: 'Invation - ' + this.invation.name,
      meta: [
        {
          hid: this.invation.name,
          name: this.invation.name,
          content: this.invation.concept,
        },
      ],
    }
  },
  computed: {
    isSaved() {
      const userId = this.$auth.$storage.getLocalStorage('userId')

      if (userId === null || userId === undefined) {
        return false
      } else {
        let finded = false

        this.invation.users.forEach((user) => {
          if (userId === user.id) {
            finded = true
          } else {
            finded = false
          }
        })

        return finded
      }
    },
  },
  methods: {
    postReview(e) {
      this.review.invation_id = this.invation.id
      this.review.author = this.reviewAuthor
      this.review.body = this.reviewBody

      this.$axios
        .post(`${process.env.BASE_URL}/api/review`, this.review)
        .then((result) => {
          this.invation.reviews.push(result.data)
          this.reviewAuthor = ''
          this.reviewBody = ''
        })
      e.preventDefault()
    },
  },
}
</script>

<style>
.more {
  text-align: center;
  margin: 40px;
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
  text-transform: uppercase;
}
</style>
