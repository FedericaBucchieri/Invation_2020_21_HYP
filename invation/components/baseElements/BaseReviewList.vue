<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(item, itemIndex) of reviewList"
        :key="'review-' + itemIndex"
        class="review"
      >
        <div class="author">{{ item.author }}</div>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewList: { type: Array, default: () => [] },
  },
}
</script>

<style>
.review {
  width: 80%;
  margin-bottom: 10px;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
}

.author {
  color: rgba(241, 85, 106, 1);
  font-weight: bold;
  font-size: 20px;
}
</style>
