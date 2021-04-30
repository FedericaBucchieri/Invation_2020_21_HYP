<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <object-overview
      :name="completeName"
      :img-path="invationer.picture"
      :overview="invationer.overview"
    ></object-overview>
    <div class="container">
      <div class="row">
        <div class="details-list">
          <h3>PERSONAL DETAILS</h3>
          <div class="details-bar">
            <span><b>age:</b> {{ invationer.age }}</span>
            <span><b>gender:</b> {{ invationer.gender }}</span>
            <span><b>nationality:</b> {{ invationer.nationality }}</span>
            <span><b>sport:</b> {{ invationer.sport }}</span>
            <span><b>hobby:</b> {{ invationer.hobby }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="role-skill-container">
          <div class="role-section">
            <h4>ROLE</h4>
            <img :src="invationer.badge" />
            <p>{{ invationer.role }}</p>
          </div>
          <div class="skill-section">
            <h4>SKILLS</h4>
            <img
              v-for="(item, itemIndex) of invationer.skills"
              :key="'skill-' + itemIndex"
              :src="item.image"
              :alt="item.name"
            />
          </div>
          <div class="contact-section">
            <h4>CONTACT ME</h4>
            <ul
              class="contact-list"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <li>Telephone Number: +39 389 932321</li>
              <li>Email: clare.griffin@invation.com</li>
              <li>Fax: 88776 5432325</li>
              <li>Linkedin: clarke.griffin</li>
              <li>Instagram: #clarkeGriffin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right-image-decor"></div>
    <div class="container">
      <div class="row">
        <div class="inspirational-quote">"{{ invationer.quote }} "</div>
      </div>
    </div>
    <section id="invationers">
      <invartioner-short-card-container
        :card-list="invationers"
        :title="'Other Invationers'"
      ></invartioner-short-card-container>
    </section>
  </div>
</template>

<script>
import ObjectOverview from '~/components/baseElements/ObjectOverview.vue'
import InvartionerShortCardContainer from '~/components/invationer/InvartionerShortCardContainer.vue'

export default {
  components: {
    ObjectOverview,
    InvartionerShortCardContainer,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const invationerData = await $axios.get(
      `${process.env.BASE_URL}/api/invationer/${id}`
    )
    const invationer = invationerData.data

    const invationersData = await $axios.get(
      `${process.env.BASE_URL}/api/invationers`
    )
    const invationers = invationersData.data
    return {
      invationer,
      invationers,
    }
  },

  data() {
    return {
      showMore: false,
    }
  },
  computed: {
    completeName() {
      return this.invationer.name + ' ' + this.invationer.surname
    },
  },
}
</script>

<style scoped>
.details-list {
  width: 100%;
  text-align: center;
}

.details-bar {
  margin: 10px;
  padding: 10px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}

.details-bar span {
  margin: 10px;
}

.details-bar b {
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
}

.role-skill-container {
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  justify-content: space-evenly;
}

.role-section {
  margin: 0 30px 30px 30px;
  text-align: center;
}

.role-section p {
  color: #f38151;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.role-section img {
  width: 120px;
  margin: 10px;
}

.skill-section {
  margin: 0 30px 30px 30px;
}

.skill-section img {
  width: 100px;
}

.contact-section {
  margin: 0 30px 30px 30px;
}

.inspirational-quote {
  text-align: center;
  font-weight: 100;
  color: #888;
  font-style: italic;
  font-size: 30px;
  width: 100%;
}
</style>
