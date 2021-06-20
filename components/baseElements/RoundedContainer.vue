<!-- Component that represents the card containers used for Vision and Invations list presentation -->
<template>
  <div class="roundedContainer">
    <div class="features-item">
      <!-- Number Tag of the components - different to id, just an ordering tag for decoration purposes -->
      <h2 v-if="displayTag">{{ numberTag }}</h2>
      <img
        :src="image"
        :alt="'Thubmnail image' + name"
        width="120"
        height="120"
        :class="[!isActiveLink ? 'inactiveImage' : '']"
      />
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <!-- Explore button if the object is clickable -->
      <nuxt-link
        v-if="isActiveLink"
        :to="`/${typology}/` + id"
        class="main-button"
      >
        Explore
      </nuxt-link>
      <!-- Explore button if the object is not clickable -->
      <button
        v-if="!isActiveLink"
        disabled="disabled"
        class="main-button-inactive"
      >
        Explore
      </button>
    </div>
    <!-- If its an invation, there is a related vision to be displayed 
    All the relavant check are developed for consistency reasons-->
    <div v-if="vision !== undefined && isActiveLink" class="vision-as-footer">
      <nuxt-link :to="'/visions/' + vision.id">
        <b>Related Vision:</b> {{ vision.name }}</nuxt-link
      >
    </div>
    <div
      v-if="vision !== undefined && !isActiveLink"
      class="vision-as-footer-inactive"
    >
      <b>Related Vision:</b> {{ vision.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberTag: { type: String, default: () => "" },
    name: { type: String, default: () => "" },
    description: { type: String, default: () => "" },
    image: { type: String, default: () => "" },
    typology: { type: String, default: () => "" },
    vision: { type: Object, default: () => {} },
    displayTag: { type: Boolean, default: () => true },
    id: { type: Number, default: () => 0 },
    isActiveLink: { type: Boolean, default: () => true },
  },
};
</script>

<style scoped>
#invation_list .features-item {
  height: 500px;
  border-radius: 10px 10px 0 0;
  padding: 50px 30px 60px 30px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.roundedContainer {
  margin-bottom: 10px;
}

#invation_list .main-button {
  margin: auto;
}

#invation_list .main-button-inactive {
  margin: auto;
  cursor: not-allowed;
}

#invation_list h2 {
  width: auto;
  margin-left: 30%;
  text-align: center;
}

.features-item p {
  overflow: hidden;
  height: 150px;
  text-align: justify;
  text-overflow: ellipsis;
  white-space: normal;
  color: #3c3c3c;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 15px;
}

.features-item h2 {
  position: absolute;
  top: 5px;
  left: 45px;
  font-size: 100px;
  font-weight: 600;
  color: #fdefe9;
}

.features-item img {
  position: relative;
  margin-bottom: 10px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  padding: 4px;
}

.features-item h3 {
  margin-top: 0px;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 15px;
  height: 52px;
}

.features-item .main-button {
  margin-top: 35px;
  display: inline-block;
}

.features-item .main-button-inactive {
  margin-top: 35px;
  display: inline-block;
}

.vision-as-footer {
  padding: 10px 15px;
  margin: auto;
  border-radius: 0 0 15px 15px;
  background: linear-gradient(
    45deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  color: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
}

.vision-as-footer-inactive {
  padding: 10px 15px;
  margin: auto;
  border-radius: 0 0 15px 15px;
  background: grey;
  color: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: not-allowed;
}

b {
  text-transform: uppercase;
  font-size: 11px;
  color: white;
  margin-right: 25px;
}

.inactiveImage {
  background: grey !important;
}
</style>
