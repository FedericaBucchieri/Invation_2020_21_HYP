<template>
  <div class="features-item">
    <h2>{{ numberTag }}</h2>
    <img :src="image" :alt="'Thubmnail image' + name" />
    <h3>{{ name }}</h3>
    <p>
      {{ description }}
    </p>
    <nuxt-link :to="`/${typology}/` + numberTag" class="main-button">
      Explore
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    numberTag: { type: String, default: () => '' },
    name: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    typology: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
a.main-button {
  font-size: 14px;
  border-radius: 25px;
  padding: 15px 25px;
  background-color: #f4813f;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

a.main-button:hover {
  background-color: #f1556a;
}
#invation_list .features-item {
  height: 550px;
  margin-bottom: 20px;
}
#invation_list .main-button {
  position: absolute;
  bottom: 40px;
  right: 25%;
  left: 25%;
}
#invation_list h2 {
  width: 100%;
  text-align: center;
}
@media (max-width: 992px) {
  .features-item {
    margin-bottom: 45px;
  }
}

.features-item {
  border-radius: 5px;
  padding: 60px 30px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.features-item h2 {
  position: absolute;
  top: 15px;
  left: 45px;
  font-size: 100px;
  font-weight: 600;
  color: #fdefe9;
}

.features-item img {
  position: relative;
  max-width: 50%;
  margin-bottom: 40px;
}

.features-item h3 {
  margin-top: 0px;
  font-size: 22px;
  color: #1e1e1e;
  margin-bottom: 25px;
}

.features-item .main-button {
  margin-top: 35px;
  display: inline-block;
}
</style>
