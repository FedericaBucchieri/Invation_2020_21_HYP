<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 inside-container">
        <div class="center-heading">
          <h3>{{ title }}</h3>
        </div>
      </div>
      <div
        class="invationer-list-container"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <invationer-short-card
          v-for="(item, itemIndex) of cardList"
          :id="item.id"
          :key="'invartioner-card' + itemIndex"
          :img="item.image"
          :name="item.name"
          :surname="item.surname"
          :role="item.role"
        >
        </invationer-short-card>
      </div>
    </div>
  </div>
</template>

<script>
import InvationerShortCard from '~/components/invationer/InvationerShortCard.vue'
export default {
  components: {
    InvationerShortCard,
  },
  props: {
    cardList: { type: Array, default: () => [] },
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
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

.center-heading h2 {
  margin-top: 0px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 25px;
  text-transform: uppercase;
}

.center-heading h2 em {
  font-style: normal;
  color: #f4813f;
}

.center-heading p {
  font-size: 15px;
  color: #888;
  text-align: center;
}
</style>
