<!-- List of Invationer Short Cards (InvatioenrShortCard.vue component) that comes with a title to introduce the cards displayed. -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 inside-container">
        <div class="center-heading">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div
        class="invationer-list-container"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <!--  list of short invationers cards -->
        <ul id="invationer-ul">
          <li
            v-for="(item, itemIndex) of cardList"
            :id="item.id"
            :key="`invationers-card` + itemIndex"
          >
            <!-- rendering invationer information -->
            <invationer-short-card :id="item.id" :invationer="item">
            </invationer-short-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import InvationerShortCard from "~/components/invationer/InvationerShortCard.vue";
export default {
  components: {
    InvationerShortCard,
  },
  props: {
    // array of cards to be displayed. Each card represent an invationer profile
    cardList: { type: Array, default: () => [] },
    // the title to be displayed before the list of cards
    title: { type: String, default: () => "" },
  },
};
</script>

<style scoped>
ul {
  display: flex;
}

.invationer-list-container {
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10%;
}

.center-heading {
  margin-bottom: 20px;
}

.center-heading p {
  font-size: 15px;
  color: #888;
  text-align: center;
}
</style>
