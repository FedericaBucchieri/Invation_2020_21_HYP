<template>
  <div class="invation-card">
    <img
      class="round"
      :src="invationer.image"
      :alt="
        invationer.name + ' ' + invationer.surname + 'short presentation card'
      "
      width="100"
      height="100"
    />
    <nuxt-link
      :to="`/invationers/` + id"
      class="card-name"
      @click.native="updateBreadcrump"
    >
      <h5>{{ invationer.name + ' ' + invationer.surname }}</h5>
    </nuxt-link>

    <div class="role">{{ invationer.role }}</div>
    <p>{{ invationer.quote }}</p>
    <div class="skills">
      <h6>Skills</h6>
      <ul>
        <li
          v-for="(item, itemIndex) of invationer.skills"
          :id="item.id"
          :key="`skill-card` + itemIndex"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => 0 },
    invationer: { type: Object, default: () => {} },
  },
  methods: {
    updateBreadcrump() {
      // If I am not in the HomePage
      if (!(this.$store.state.currentPageName === '')) {
        this.sendMessage(this.$route.path, this.$store.state.currentPageName)
      }
      this.updateCurrentPageName()
    },
    sendMessage(newPath, newPathName) {
      this.$store.commit('addVisitedPath', {
        path: newPath,
        pathName: newPathName,
      })
    },
    updateCurrentPageName() {
      this.$store.commit(
        'updateCurrentPageName',
        this.invationer.name + ' ' + this.invationer.surname
      )
    },
  },
}
</script>

<style>
.invation-card h5 {
  margin: 10px 0;
}

.invation-card h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

.invation-card .role {
  margin: 15px auto;
  text-transform: uppercase;
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  width: 60%;
  font-size: 12px;
}

.invation-card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: black;
  padding-top: 30px;
  text-align: center;
  margin: 10px;
}

.invation-card p {
  font-size: 14px;
  line-height: 21px;
  padding: 0 5px;
  margin: auto;
  color: rgb(36, 36, 36);
  font-weight: 200;
  font-style: italic;
}

.round {
  border: 1px solid #f95c65;
  border-radius: 50%;
  padding: 7px;
}

.skills {
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  min-height: 100px;
  border-radius: 0 0 10px 10px;
  color: whitesmoke;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid rgba(240, 240, 240, 0.452);
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}
</style>
