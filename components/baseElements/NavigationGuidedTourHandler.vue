<template>
  <div class="container">
    <div class="row">
      <!-- this component is responsible for handling navigation across products of the same area, implementing the guided tour pattern -->
      <div class="navigation-handler">
        <!-- Navigation objects responsible for the link with the previous object -->
        <div class="previews-section">
          <nuxt-link
            :to="`/invations/` + String(currentId - 1)"
            v-show="hasPrevious"
          >
            &#60; Previous invation of the vision
          </nuxt-link>
        </div>
        <!-- Informations related to the Area of the navigation -->
        <div class="central-section">
          <div class="vision-navigation-title">
            <nuxt-link :to="`/visions/` + String(vision.id)">
              Related Vision: {{ vision.name }}
            </nuxt-link>
          </div>
        </div>
        <!-- Navigation objects responsible for the link with the next object -->
        <div class="next-section">
          <nuxt-link
            :to="`/invations/` + String(currentId + 1)"
            v-show="hasNext"
          >
            Next invation of the vision &#62;
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vision: { type: Object, default: () => {} },
    currentId: { type: Number, default: () => 0 },
    firstElementOfTheVisionId: { type: Number, default: () => 0 },
    otherInvations: { type: Array, default: () => [] },
  },
  computed: {
    hasPrevious() {
      if (this.currentId - this.firstElementOfTheVisionId > 0) {
        return true;
      }
    },
    hasNext() {
      if (
        this.currentId <
        this.firstElementOfTheVisionId + this.otherInvations.length - 1
      ) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.navigation-handler {
  margin-top: 80px;
  margin-bottom: 0px;
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-end;
}

.previews-section,
.next-section {
  width: 30%;
  font-style: italic;
}

.previews-section:hover,
.next-section:hover {
  color: #f95c65;
  letter-spacing: 1px;
  transition: all 0.3s ease 0s;
}

.previews-section {
  text-align: left;
}

.central-section {
  width: 40%;
  text-align: center;
}

.next-section {
  text-align: right;
}

.vision-navigation-title {
  font-size: 22px;
  font-weight: 700;
}
</style>
