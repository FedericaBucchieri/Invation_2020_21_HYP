<!-- Home Page -->
<template>
  <div>
    <!--  Welcome Area  -->
    <welcome-area-start :text-button="textButton" :link="'/about'">
      <template #title> Join our <em>Vision</em> of the Future </template>
      <template #overview>
        Our company was born in <b>2001</b> at the early stages of the
        <i>new millennium.</i> <br />
        with a special look at the future, <b>Invation</b> immediately started
        to imposes itself as an <i>innovative</i> company. Inside the company
        there are <i>three pillars:</i> Innovation, Invention and Teamwork.
      </template>
    </welcome-area-start>

    <!-- Visions, Invations e Invationers description -->
    <section id="definitions">
      <div class="container">
        <div class="row">
          <div class="blod-container">
            <blob-with-text
              :text="visionDefinition"
              :button-text="'Discover our visions'"
              :link="'/visions'"
              :background="'/blob-left.png'"
            >
              What are the <em>Visions</em>
            </blob-with-text>
            <blob-with-text
              :text="invationDefinition"
              :button-text="'Discover our Invations'"
              :link="'/invations'"
              :background="'/blob-center.png'"
              class="central-blob"
            >
              What are the <em>Invations</em>
            </blob-with-text>
            <blob-with-text
              :text="invationersDefinition"
              :button-text="'Discover our Invationers'"
              :link="'/invationers'"
              :background="'/blob-right.png'"
              class="right-bob"
              >Who are the <em>Invationers</em>
            </blob-with-text>
          </div>
        </div>
      </div>
    </section>

    <!-- Last three products -->
    <section id="latestProducts">
      <div class="left-image-decor"></div>
      <three-object-container
        :big-image="bigImage"
        :objects="last3Invations"
        :title="'Our last three invations'"
        :is-object-list="true"
        typology="invations"
      >
        Invation is proud to show you the last three products or - as we call
        them - <i>invations</i>, that our fanstastic team developed. Those
        invations are part of different visions, come and enjoy all our guided
        tours in the <b>"Visions"</b> section.
      </three-object-container>
    </section>
  </div>
</template>

<script>
import ThreeObjectContainer from "~/components/baseElements/ThreeObjectContainer.vue";
import WelcomeAreaStart from "~/components/baseElements/WelcomeAreaStart.vue";
import BlobWithText from "~/components/decoration/BlobWithText.vue";

export default {
  components: {
    WelcomeAreaStart,
    ThreeObjectContainer,
    BlobWithText,
  },

  // Get the last tree invations
  async asyncData({ $axios }) {
    const last3Invations = await $axios.get(
      `${process.env.BASE_URL}/api/invations_last`
    );

    return {
      last3Invations: last3Invations.data,
    };
  },
  data() {
    return {
      textButton: "ABOUT THE COMPANY",
      areaName: "Explore our Visions",
      bigImage: "https://imgur.com/OrwkWr6.png",
      invationerTitle: "Discover our team: The Invationers",
      visionDefinition:
        "Visions are interactive itinerary based on a chosen theme, created as a set of innovative products. Go and explore our 4 Visions!",
      invationDefinition:
        "Invations are innovative inventions and ideas to shape a new concrete concept of future. Do you want to know more?",
      invationersDefinition:
        "Did you really not figure it out already? Our employees will present them. They are the Invationers! Our great team.",
    };
  },
  created() {
    this.$root.$emit("location-from-breadcrump", "Home");
  },
  head() {
    return {
      title: "Invation - Home Page",
      meta: [
        {
          name: "description",
          content:
            "Invation is a visionary company that proposes four thematic visions full of innovative product to have a look at the future",
        },
        {
          hid: "Home page",
          name: "Home page",
          content:
            "Invation is a visionary company that proposes four thematic visions full of innovative product to have a look at the future",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 810px) {
  section {
    margin: 15% auto;
  }

  #latestProducts {
    margin-bottom: 150px;
  }

  .blod-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
  }

  .central-blob {
    top: 0;
  }
}

@media only screen and (min-width: 810px) {
  section {
    margin: 18% auto;
  }

  #definitions {
    margin: 5% auto 18% auto;
  }

  #explore {
    margin-bottom: 10%;
    margin-top: -15%;
  }

  #latestProducts {
    margin-top: -10%;
  }

  .blod-container {
    display: inline-flex;
    flex-wrap: wrap;
  }
}

@media (min-width: 810px) {
  .central-blob {
    position: relative;
    top: -200px;
    text-align: center;
    background-position: bottom center;
  }
}

.right-bob {
  text-align: right;
}
</style>
