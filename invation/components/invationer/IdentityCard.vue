<template>
  <div class="container">
    <div class="row">
      <div class="title-id-card">
        <h2>INVATIONER ID CARD</h2>
      </div>
      <div
        class="id_card"
        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
      >
        <div class="id-left-section">
          <p>
            <b>Name:</b> {{ invationer.name }} <br />
            <b>Surname:</b> {{ invationer.surname }}<br />
            <b>Age:</b> {{ invationer.age }}<br />
            <b>Gender:</b> {{ invationer.gender }}<br />
            <b>Nationality:</b> {{ invationer.nationality }}<br />
          </p>
        </div>
        <div class="id-right-section">
          <p>
            <b>Hobby:</b> {{ invationer.hobby }}<br />
            <b>Sport:</b> {{ invationer.sport }}<br />
            <b>Musical Style:</b> {{ invationer.musical }}<br />
            <b>Preferred Vision:</b> {{ invationer.preferred }}<br />
          </p>
        </div>
      </div>
      <div class="role-section">
        <h4>{{ invationer.role }}</h4>
        <img src="assets/images/badge-software.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invationer: { type: Object, default: () => null },
  },
}
</script>

<style>
.id_card {
  display: inline-flex;
  flex-wrap: wrap;
  width: 40%;
  border-radius: 10px;
  padding: 30px;
  margin: 0 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
}

.title-id-card {
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10%;
}

.id_card b {
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}

.id_card p {
  color: white;
  text-align: right;
}

.id-left-section {
  width: 100%;
  margin-bottom: 10px;
}

.id-right-section {
  width: 100%;
}

.role-section {
  margin-left: 30px;
  float: center;
  text-align: center;
}

.role-section h4 {
  color: #f38151;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.role-section img {
  width: 120px;
}
</style>
