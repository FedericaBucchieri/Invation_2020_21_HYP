<template>
  <div class="container">
    <div class="row">
      <div
        class="features-item-right"
        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
      >
        <p>
          {{ content }}
        </p>
        <h2>MORE</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, default: () => '' },
  },
}
</script>

<style>
.features-item-right {
  border-radius: 5px;
  padding: 0px 0px 0px 300px;
  text-align: right;
  display: flex;
  float: right;
}

.features-item-right h2 {
  font-size: 40px;
  font-weight: 600;
  color: #fba681;
  margin-left: 50px;
}

.features-item-right p {
  max-width: 60%;
  float: right;
  margin-bottom: 20px;
  text-align: justify;
}
</style>
