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
        <short-card
          v-for="(item, itemIndex) of cardList"
          :id="item.id"
          :key="`${typology}-card` + itemIndex"
          :img="item.image"
          :name="item.name"
          :role="item.role"
          :typology="`${typology}`"
        >
        </short-card>
        <!-- :surname="item.surname" -->
      </div>
    </div>
  </div>
</template>

<script>
import ShortCard from '~/components/baseElements/ShortCard.vue'
export default {
  components: {
    ShortCard,
  },
  props: {
    cardList: { type: Array, default: () => [] },
    title: { type: String, default: () => '' },
    typology: { type: String, default: () => 'invationers' },
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
