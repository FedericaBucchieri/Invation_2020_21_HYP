<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <!-- Overview -->
    <object-overview
      :name="completeName"
      :img-path="invationer.image"
      :overview="invationer.overview"
      :paths-list="pathsList"
    ></object-overview>
    <!-- Personal Details -->
    <section id="personalDetails">
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
    </section>
    <!-- Role, section and Skills -->
    <div class="right-image-decor"></div>
    <section id="roleAndSkill">
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
                <li>Telephone Number: {{ invationer.telephone }}</li>
                <li>Email: {{ invationer.email }}</li>
                <li>Fax: {{ invationer.fax }}</li>
                <li>Linkedin: {{ invationer.linkedin }}</li>
                <li>Instagram: {{ invationer.instagram }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Personal Quote -->
    <section id="personalQuote">
      <div class="container">
        <div class="row">
          <div class="inspirational-quote">"{{ invationer.quote }} "</div>
        </div>
      </div>
    </section>
    <!-- Invations that the Invationer worked on -->
    <section id="invationers_invations">
      <content-rounded-containers
        :content="invationer.invations"
        :area-name="'The Invations this Invationer worked on'"
        :typology="'invations'"
        :has-research="true"
        :description-name="'overview'"
      >
      </content-rounded-containers>
    </section>
    <div class="left-image-decor"></div>
    <!-- Other Invationers -->
    <section id="invationers">
      <invationer-short-card-container
        :card-list="invationers.filter((inv) => inv.id !== invationer.id)"
        :title="'Other Invationers'"
      ></invationer-short-card-container>
    </section>
  </div>
</template>

<script>
import ObjectOverview from '~/components/baseElements/ObjectOverview.vue'
import InvationerShortCardContainer from '~/components/invationer/InvationerShortCardContainer.vue'
import ContentRoundedContainers from '~/components/baseElements/ContentRoundedContainers.vue'

export default {
  components: {
    ObjectOverview,
    InvationerShortCardContainer,
    ContentRoundedContainers,
  },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const invationerData = await $axios.get(
      `${process.env.BASE_URL}/api/invationers/${id}`
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
      pathsList: [],
    }
  },
  mounted() {
    this.pathsList = [
      {
        path: '/invationers',
        pathName: 'Invationers',
      },
      {
        path: `/invationers/${this.invationer.id}`,
        pathName: `${this.invationer.name + ' ' + this.invationer.surname}`,
      },
    ]
  },
  head() {
    return {
      title: 'Invation - ' + this.invationer.name,
      meta: [
        {
          name: 'description',
          content: this.invationer.overview,
        },
        {
          hid: this.invationer.name,
          name: this.invationer.name,
          content: this.invationer.overview,
        },
      ],
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
section {
  margin: 5% 0 0 0;
}

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

@media only screen and (min-width: 810px) {
  #invationers {
    margin-bottom: 5%;
  }
}

@media only screen and (max-width: 810px) {
  #personalQuote {
    margin-bottom: 15%;
  }

  #invationers {
    margin-bottom: 20%;
  }
}
</style>
