<!-- Main info of each element inside the visionGuideTourElement, namely the title, the subtitle and the product overview -->
<template>
  <div class="features-title-section">
    <!-- Title of the product with link to the product page -->
    <nuxt-link :to="link">
      <h2>Product: {{ title }}</h2>
    </nuxt-link>
    <h3>{{ subtitle }}</h3>
    <p>
      {{ overview }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    // The array of elements to be displayed by this element: title, subtitle, overview and link
    content: { type: Array, default: () => [] },
  },
  data() {
    return {
      title: this.content[0],
      subtitle: this.content[1],
      overview: this.content[2],
      link: this.content[3],
    };
  },
};
</script>

<style scoped>
.features-item-right {
  border-radius: 5px;
  padding: 0px 30px;
  text-align: right;
  display: flex;
  margin-right: 100px;
  background-image: url(static/decor/bg-featured-right.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.features-item-left {
  border-radius: 5px;
  padding: 0px 30px;
  text-align: left;
  display: flex;
  margin-right: 100px;
  background-image: url(static/decor/bg-featured-left.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.features-item-right h2 {
  font-size: 40px;
  font-weight: 600;
  color: #fba681;
  text-align: right;
}

.features-item-left h2 {
  font-size: 40px;
  font-weight: 600;
  color: #fba681;
  text-align: left;
}

h2:hover {
  text-decoration: underline;
}

.features-item-right h3 {
  margin-top: 0px;
  margin: 0;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 25px;
  text-align: right;
}

.features-item-left h3 {
  margin-top: 0px;
  margin: 0;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 25px;
  text-align: left;
}

.features-title-section {
  width: 80%;
}

.features-item-right p {
  max-width: 70%;
  float: right;
  margin-bottom: 20px;
  text-align: justify;
}

.features-item-left p {
  max-width: 70%;
  float: left;
  margin-bottom: 20px;
  text-align: justify;
}

@media screen and (max-width: 810px) {
  .features-title-section {
    width: 100%;
  }
  .features-item-left p {
    max-width: 100%;
  }

  .features-item-right p {
    max-width: 100%;
  }
}
</style>
