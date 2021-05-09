<template>
  <div class="features-details-section">
    <h3>{{ numberTag }}</h3>
    <img :src="image" alt="" />
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
    }
  },
}
</script>

<style scoped>
.features-details-section {
  width: 20%;
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
  max-width: 80%;
  position: relative;
  top: -80px;
  border-radius: 50%;
  box-shadow: #1e1e1e 0px 0px 2px;
  margin-bottom: 40px;
}

.features-item-right img {
  max-width: 80%;
  position: relative;
  top: -80px;
  border-radius: 50%;
  box-shadow: #1e1e1e 0px 0px 2px;
  margin-bottom: 40px;
}
</style>
