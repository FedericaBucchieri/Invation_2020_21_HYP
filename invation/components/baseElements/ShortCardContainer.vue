<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 inside-container">
        <div class="center-heading">
          <h3>{{ title }}</h3>
        </div>
        <input
          id="searchInput"
          type="text"
          placeholder="Search for invationers..."
          @keyup="searchFunction(false)"
        />
      </div>
      <div
        class="invationer-list-container"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <ul id="searchUL">
          <short-card
            v-for="(item, itemIndex) of cardList"
            :id="item.id"
            :key="`${typology}-card` + itemIndex"
            :img="item.image"
            :name="item.name"
            :surname="item.surname"
            :role="item.role"
            :typology="`${typology}`"
          >
          </short-card>
        </ul>
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
  methods: {
    searchFunction(isCaseSensitive) {
      // Declare variables
      const input = document.getElementById('searchInput')
      let filter
      if (isCaseSensitive) {
        filter = input.value
      } else {
        filter = input.value.toUpperCase()
      }
      const ul = document.getElementById('searchUL')
      const li = ul.getElementsByTagName('li')

      // Loop through all list items, and hide those who don't match the search query
      for (let i = 0; i < li.length; i++) {
        const h5 = li[i].getElementsByTagName('h5')[0]
        const txtValue = h5.textContent || h5.innerText
        if (txtValue.toUpperCase().includes(filter)) {
          li[i].style.display = ''
        } else {
          li[i].style.display = 'none'
        }
      }
    },
  },
}
</script>

<style scoped>
ul {
  display: flex;
}

input {
  width: 100%;
  margin: 30px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 20px;
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
