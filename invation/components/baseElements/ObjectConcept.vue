<template>
  <div class="container">
    <div class="row">
      <div
        class="features-item-left inside-container"
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
  flex-wrap: wrap;
}

.features-item-left h2 {
  margin-top: 0px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 25px;
}

.features-item-left p {
  max-width: 100%;
  float: left;
  margin-bottom: 20px;
  text-align: justify;
}

.inside-container {
  padding: 40px 15px;
}
</style>
