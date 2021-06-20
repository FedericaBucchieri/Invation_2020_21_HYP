<!-- Details of each element inside the visionGuideTourElement, namely the numberTag and the product image -->
<template>
  <div class="features-details-section">
    <h3>{{ numberTag }}</h3>
    <img
      :src="image"
      :alt="name + ' thumbnail image'"
      width="120"
      height="120"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Array, default: () => [] },
  },
  data() {
    return {
      numberTag: this.content[0],
      image: this.content[1],
      name: this.content[2],
    };
  },
};
</script>

<style scoped>
.features-details-section {
  width: 20%;
}

@media screen and (max-width: 810px) {
  .features-details-section {
    width: 100%;
  }

  .features-item-left img {
    position: unset !important;
    margin: 5px !important;
  }

  .features-item-right img {
    position: unset !important;
    margin: 5px !important;
  }

  .features-item-right h3 {
    position: unset !important;
    color: #f38151 !important;
    text-align: right;
    margin-bottom: 0 !important;
  }

  .features-item-left h3 {
    position: unset !important;
    color: #f38151 !important;
    text-align: left;
    margin-bottom: 0 !important;
  }
}

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

.features-item-left h3 {
  font-size: 100px;
  font-weight: 600;
  color: #fdefe9;
  position: relative;
  top: -30px;
}

.features-item-right h3 {
  font-size: 100px;
  font-weight: 600;
  color: #fdefe9;
  position: relative;
  top: -30px;
}

.features-item-left img {
  position: relative;
  top: -80px;
  border-radius: 50%;
  box-shadow: #1e1e1e 0px 0px 2px;
  margin: 20px 340px 40px 20px;
}

.features-item-right img {
  position: relative;
  top: -80px;
  border-radius: 50%;
  box-shadow: #1e1e1e 0px 0px 2px;
  margin: 20px 20px 40px 20px;
}
</style>
