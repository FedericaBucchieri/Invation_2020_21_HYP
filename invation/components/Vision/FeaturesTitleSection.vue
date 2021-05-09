<template>
  <div class="features-title-section">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <p>
      {{ overview }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Array, default: () => [] },
  },
  data() {
    return {
      title: this.content[0],
      subtitle: this.content[1],
      overview: this.content[2],
    }
  },
}
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

.features-item-right h4 {
  margin-top: 0px;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 25px;
}

.features-item.left h4 {
  margin-top: 0px;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 25px;
}

.features-title-section {
  width: 80%;
}
</style>
