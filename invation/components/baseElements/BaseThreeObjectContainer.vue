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
        />
      </div>
      <div
        class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix"
      >
        <h2>{{ title }}</h2>
        <br />
        <ul>
          <li
            v-for="(item, itemIndex) of objects"
            :key="'objectOfTheThree-' + itemIndex"
            class="objectOfTheThree"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <img
              :src="item.image"
              :alt="item.name + 'thumbnail image'"
              width="100"
              height="100"
            />
            <div class="text">
              <div class="object-name">{{ item.name }}</div>
              <p>
                {{ item.description }}
              </p>
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
    bigImage: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    objects: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.right-text ul {
  padding: 0;
  margin: 0;
}

.right-text li {
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
}

.right-text ul li {
  display: inline-block;
  margin-bottom: 30px;
}

.right-text ul li:last-child {
  margin-bottom: 0px;
}

.right-text img {
  display: inline-block;
  float: left;
  margin-right: 30px;
  max-width: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.right-text .object-name {
  font-size: 21px;
  margin-bottom: 15px;
  margin-top: 3px;
  text-align: left;
  color: #f38151;
  font-weight: 600;
}

.right-text p {
  margin-left: 130px;
  text-align: justify;
}
</style>
