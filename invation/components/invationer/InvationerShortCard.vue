<template>
  <div class="invationer-card">
    <div class="invationer">
      <img
        :src="img"
        :alt="name + ' ' + surname + 'short presentation card'"
        width="75"
        height="75"
      />
    </div>
    <div class="invationer-description">
      <nuxt-link :to="'/invationer/' + id" class="invationer-name">{{
        name + ' ' + surname
      }}</nuxt-link>
      <p>{{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => 0 },
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    img: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
  },
}
</script>

<style>
.invationer-card {
  width: auto;
  margin: 10px;
}

.invationer img {
  max-width: 75px;
  margin-bottom: -60px;
  border-radius: 100%;
}

.invationer-description {
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

.invationer-name {
  font-size: 12px;
  color: whitesmoke;
}

.invationer-description p {
  font-size: 9px;
  text-transform: uppercase;
  color: whitesmoke;
}
</style>
