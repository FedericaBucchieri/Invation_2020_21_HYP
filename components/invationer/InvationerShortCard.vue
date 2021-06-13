<template>
  <div class="invation-card">
    <div class="invationer-details">
      <img
        class="round"
        :src="invationer.image"
        :alt="
          invationer.name + ' ' + invationer.surname + 'short presentation card'
        "
        width="100"
        height="100"
      />
      <div class="invationer-name">
        <h5>
          {{ invationer.name + " " + invationer.surname }}
        </h5>
      </div>

      <div class="role">{{ invationer.role }}</div>
      <p>{{ invationer.quote }}</p>

      <nuxt-link :to="`/invationers/` + id" class="card-name">
        <button class="main-button invationer-button">Explore</button>
      </nuxt-link>
    </div>
    <div class="skills">
      <p class="skill-title">Skills</p>
      <ul>
        <li
          v-for="(item, itemIndex) of invationer.skills"
          :id="item.id"
          :key="`skill-card` + itemIndex"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => 0 },
    invationer: { type: Object, default: () => {} },
  },
};
</script>

<style>
.invation-card .invationer-name {
  margin: 10px 0 0 0;
  font-size: 18px;
  font-weight: 600;
}

.invation-card .skill-title {
  margin: 5px 0;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  font-style: normal;
  padding: 0;
}

.invation-card .role {
  margin: 0 auto 15px auto;
  text-transform: uppercase;
  color: rgba(244, 129, 63, 1);
  padding: 5px 10px;
  border-radius: 10px;
  width: 80%;
  font-size: 14px;
}

.invationer-details {
  height: 270px;
}

.invation-card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: black;
  padding-top: 30px;
  text-align: center;
  margin: 10px;
  width: 265px;
}

.invation-card p {
  font-size: 14px;
  line-height: 21px;
  padding: 0 10px;
  margin: auto;
  color: rgb(36, 36, 36);
  font-weight: 200;
  font-style: italic;
  width: 265px;
}

.invationer-button {
  margin-top: 20px;
}

.invationer-button:hover {
  color: black;
}

.round {
  border: 1px solid #f95c65;
  border-radius: 50%;
  padding: 7px;
}

.skills {
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  min-height: 100px;
  border-radius: 0 0 10px 10px;
  color: whitesmoke;
  height: 182px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid rgba(240, 240, 240, 0.452);
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}
</style>
