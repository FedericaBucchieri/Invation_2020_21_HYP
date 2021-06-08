<template>
  <div class="container">
    <div class="row">
      <div
        class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
      >
        <img
          :src="bigImage"
          class="rounded img-fluid d-block mx-auto"
          :alt="title"
          width="445"
          height="492"
          loading="lazy"
        />
      </div>
      <div
        class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix"
      >
        <h2>{{ title }}</h2>
        <div class="introduction">
          <slot></slot>
        </div>
        <br />
        <ul>
          <li
            v-for="(item, itemIndex) of objects"
            :key="'objectOfTheThree-' + itemIndex"
            class="objectOfTheThree"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <div
              v-if="isObjectList"
              class="vision-tag-on-border"
              :class="'visions-style-' + item.vision.id"
            >
              <nuxt-link :to="`/visions/` + item.vision.id">
                {{ item.vision.name }}
              </nuxt-link>
            </div>
            <div class="object-container">
              <img
                :src="item.thumbnail"
                :alt="item.name + 'thumbnail image'"
                width="100"
                height="100"
                loading="lazy"
              />
              <div class="text">
                <nuxt-link
                  :class="{ disabled: disabled }"
                  :to="`/${typology}/` + item.id"
                >
                  <span class="object-name">{{ item.name }}</span>
                </nuxt-link>
                <span v-if="isObjectList" class="item-creation-date">
                  {{ formatDate(item.createdAt) }}
                </span>
                <p>
                  {{ item.overview }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigImage: { type: String, default: () => "" },
    title: { type: String, default: () => "" },
    objects: { type: Array, default: () => [] },
    typology: { type: String, default: () => "" },
    isObjectList: { type: Boolean, default: () => true },
  },
  data() {
    return {
      disabled: { type: Boolean, default: () => false },
    };
  },
  mounted() {
    this.disabled = this.typology === "";
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped>
.disabled {
  color: lightgrey;
  pointer-events: none;
}
.left-image {
  align-self: center;
}

.right-text ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.object-container {
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  background-color: white;
  width: 100%;
  min-height: fit-content;
  display: inline-flex;
  flex-wrap: wrap;
}

.right-text ul li {
  display: inline-flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  width: 100%;
}

.right-text ul li:last-child {
  margin-bottom: 0px;
}

.right-text img {
  display: inline-block;
  margin-right: 10px;
  max-width: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.right-text .object-name {
  font-size: 21px;
  text-align: left;
  color: #f38151;
  font-weight: 600;
  margin: 0;
}

.right-text p {
  text-align: justify;
}

.item-creation-date {
  float: right;
  color: #888;
  font-size: 12px;
}

.text {
  width: 75%;
  margin-left: 5px;
}

.introduction {
  margin: 5px;
  font-size: 14px;
  text-align: justify;
}

.vision-tag-on-border {
  padding: 5px 10px;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  text-align: right;
  border-radius: 10px 10px 0 0;
}

.visions-style-2 {
  background-color: teal;
  border-bottom: teal solid 4px;
}

.visions-style-3 {
  background-color: darkslateblue;
  border-bottom: darkslateblue solid 4px;
}

.visions-style-1 {
  background-color: #e9c843;
  border-bottom: #e9c843 solid 4px;
}

.visions-style-4 {
  background-color: green;
  border-bottom: green solid 4px;
}
</style>
