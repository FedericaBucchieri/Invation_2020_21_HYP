<template>
  <div class="invation-card">
    <div class="invation-profile">
      <img
        :src="img"
        :alt="name + ' ' + surname + 'short presentation card'"
        width="75"
        height="75"
      />
    </div>
    <div class="card-description">
      <nuxt-link :to="`/${typology}/` + id" class="card-name">{{
        name
      }}</nuxt-link>
      <p>{{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => 0 },
    typology: { type: String, default: () => 'invationers' },
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    img: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
  },
}
</script>

<style>
.invation-card {
  width: auto;
  margin: 10px;
}

.invation-profile img {
  max-width: 75px;
  margin-bottom: -60px;
  border-radius: 100%;
}

.card-description {
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  margin-left: 50px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 5px;
}

.card-name {
  font-size: 12px;
  color: whitesmoke;
}

.card-description p {
  font-size: 9px;
  text-transform: uppercase;
  color: whitesmoke;
}
</style>
