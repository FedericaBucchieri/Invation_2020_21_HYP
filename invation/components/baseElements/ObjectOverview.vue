<template>
  <div class="container">
    <div class="row">
      <span
        v-for="(item, itemIndex) of $store.state.visitedPaths"
        :key="'breadcrupm-link-' + itemIndex"
      >
        <nuxt-link
          :to="item.path"
          @click.native="readjustBreadcrump(item.pathName)"
        >
          > {{ item.pathName }}
        </nuxt-link></span
      >
      <object-presentation-img :info="name" :img-path="imgPath">
      </object-presentation-img>
      <div
        class="right-text col-lg-6 col-md-12 col-sm-12 col-xs-12 inside-container overview-row"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <div class="title-object-overview">
          <h1>
            {{ name }}
          </h1>
          <div v-if="isSavable && isLoggedIn" class="star">
            <div v-if="mySaved" @click="unSaveObject">&#9733;</div>
            <div v-else @click="saveObject">&#9734;</div>
          </div>
        </div>
        <p>
          {{ overview }}
        </p>
        <hr />
        <base-tags-bar :tag-list="tags"></base-tags-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTagsBar from '~/components/baseElements/BaseTagsBar.vue'
import ObjectPresentationImg from '~/components/baseElements/ObjectPresentationImg.vue'

export default {
  components: {
    ObjectPresentationImg,
    BaseTagsBar,
  },
  props: {
    name: { type: String, default: () => '' },
    overview: { type: String, default: () => '' },
    imgPath: { type: String, default: () => '' },
    tags: { type: Array, default: () => [] },
    isSavable: { type: Boolean, default: () => false },
    isSaved: { type: Boolean, default: () => false },
    id: { type: Number, default: () => 0 },
  },
  data() {
    return {
      mySaved: this.isSaved,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$auth.$storage.getLocalStorage('username') !== null
    },
  },
  methods: {
    saveObject(e) {
      // local update
      this.mySaved = !this.mySaved
      // database update
      this.$axios.post(
        `${process.env.BASE_URL}/api/saveInvation/` +
          this.id +
          '/' +
          this.$auth.$storage.getLocalStorage('userId'),
        {}
      )
      e.preventDefault()
    },
    unSaveObject(e) {
      // local update
      this.mySaved = !this.mySaved
      // database update
      this.$axios.post(
        `${process.env.BASE_URL}/api/unSaveInvation/` +
          this.id +
          '/' +
          this.$auth.$storage.getLocalStorage('userId'),
        {}
      )
      e.preventDefault()
    },
    readjustBreadcrump(pathName) {
      this.$store.commit('readjustBreadcrump', pathName)
      this.updateCurrentPageName(pathName)
    },
    updateCurrentPageName(pathName) {
      this.$store.commit('updateCurrentPageName', pathName)
    },
  },
}
</script>

<style scoped>
.overview-row {
  align-self: center;
}
.title-object-overview {
  display: inline-flex;
  flex-wrap: wrap;
}

h1 {
  font-weight: 900;
  font-size: 52px;
  line-height: 80px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: #191a20;
}
.star {
  margin-left: 50px;
  margin-top: 20px;
  font-size: 28px;
  cursor: pointer;
}

h4 {
  font-size: 15px;
  line-height: 80px;
  letter-spacing: 1px;
  color: #191a20;
}

.left-text {
  position: relative;
  align-self: center;
  margin-top: 35%;
  transform: perspective(1px) translateY(-30%) !important;
}

.container {
  margin-top: 100px;
}
</style>
