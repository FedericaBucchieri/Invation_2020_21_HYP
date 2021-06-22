<!-- Component that provide a paragraph for more info about an object, mainly used for products extra details.  -->
<template>
  <div class="container">
    <div class="row">
      <div
        class="features-item-right"
        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
      >
        <!-- Extra details content -->
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
  // Content of the extra information to be displayed
  props: {
    content: { type: String, default: () => "" },
  },
};
</script>

<style scoped>
.features-item-right {
  border-radius: 5px;
  padding: 0 0 0 15%;
  text-align: right;
  display: flex;
  float: right;
  flex-wrap: wrap-reverse;
}

.features-item-right h2 {
  margin-top: 0px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 25px;
  margin-left: 50px;
}

.features-item-right p {
  max-width: 70%;
  float: right;
  margin-bottom: 20px;
  text-align: justify;
}

@media (max-width: 810px) {
  p {
    max-width: 100%;
    margin: auto;
  }

  .features-item-right {
    border-radius: 5px;
    padding: 0;
    text-align: justify;
    display: flex;
    flex-wrap: wrap-reverse;
    float: center;
  }
}
</style>
