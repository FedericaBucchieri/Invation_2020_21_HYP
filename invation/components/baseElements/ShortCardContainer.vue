<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 inside-container">
        <div class="center-heading">
          <h2>{{ title }}</h2>
        </div>
        <search-component
          :is-case-sensitive="false"
          id-ul="searchUL"
          tag-to-search="h5"
        >
        </search-component>
      </div>
      <div
        class="invationer-list-container"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <ul id="searchUL">
          <li
            v-for="(item, itemIndex) of cardList"
            :id="item.id"
            :key="`invationers-card` + itemIndex"
          >
            <short-card :id="item.id" :invationer="item"> </short-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ShortCard from '~/components/baseElements/ShortCard.vue'
import SearchComponent from '~/components/baseElements/SearchComponent.vue'
export default {
  components: {
    ShortCard,
    SearchComponent,
  },
  props: {
    cardList: { type: Array, default: () => [] },
    title: { type: String, default: () => '' },
  },
}
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
