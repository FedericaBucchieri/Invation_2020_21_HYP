<!-- Component that provide the structure for an object description, used for products concepts.  -->
<template>
  <div class="container">
    <div class="row">
      <div
        class="features-item-left inside-container"
        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
      >
        <h2>CONCEPT</h2>
        <!-- The body of the object description -->
        <p>
          {{ concept }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Textual description of the concept to be displayed
  props: {
    concept: { type: String, default: () => "" },
  },
};
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
  margin-bottom: 5px;
}

.features-item-left p {
  max-width: 100%;
  float: left;
  margin-bottom: 20px;
  text-align: justify;
}

.inside-container {
  padding: 40px 60px;
}

.vision-name a {
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.vision-name a:hover {
  color: #fba70b;
}

.vision-name b {
  color: white;
  text-transform: uppercase;
  font-size: 11px;
}

@media (max-width: 810px) {
  .vision-name a {
    position: relative;
    top: -20px;
    left: -27%;
  }
}

@media (max-width: 1200px) {
  .vision-name {
    text-align: right;
    width: max-content;
    margin-top: 10px;
    margin-left: 50px;
  }
}

@media (min-width: 1201px) {
  .vision-name {
    text-align: right;
    width: 84%;
    margin-top: 10px;
    margin-right: 0;
  }
}
</style>
