<template>
  <div class="container">
    <div class="row">
      <div
        class="features-item-left"
        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
      >
        <h2>CONCEPT</h2>
        <p>
          {{ concept }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    concept: { type: String, default: () => '' },
  },
}
</script>

<style>
.features-item-left {
  border-radius: 5px;
  padding: 0px 30px;
  text-align: left;
  display: flex;
  margin-right: 100px;
}

.features-item-left h2 {
  font-size: 40px;
  font-weight: 600;
  color: #fba681;
  margin-right: 50px;
}

.features-item-left p {
  max-width: 100%;
  float: left;
  margin-bottom: 20px;
  text-align: justify;
}
</style>
