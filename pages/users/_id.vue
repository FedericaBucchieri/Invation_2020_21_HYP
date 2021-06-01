<template>
  <div class="content">
    <div class="left-image-decor"></div>
    <div class="container">
      <div class="row">
        <div class="profile-container">
          <div class="user-extra">
            <img
              :src="user.image"
              :alt="user.username + 'profile photo'"
              width="250"
              height="250"
            />
            <div class="user-experience">
              <label> User Experience </label>
              <p>{{ experience }}</p>
            </div>
          </div>
          <div v-if="!isModifyMode" class="user-personal-info">
            <h1>User Profile</h1>
            <label> Username </label>
            <p>{{ user.username }}</p>
            <label> Email </label>
            <p>{{ user.email }}</p>
            <label> Password </label>
            <p>{{ user.password }}</p>
            <button class="main-button" @click="isModifyMode = !isModifyMode">
              Modify
            </button>
          </div>
          <div v-else class="user-personal-info">
            <h2>Modify Profile</h2>
            <form method="post" @submit.prevent="updateProfile">
              <label for="uname"><b>Username</b></label>
              <input
                v-model="username"
                type="text"
                :placeholder="user.username"
                name="uname"
                disabled
                class="disabled"
              />
              <label for="uname"><b>Email</b></label>
              <input
                v-model="email"
                type="text"
                :placeholder="user.email"
                name="email"
              />
              <p>{{ validateEmail }}</p>
              <label for="psw"><b>Password</b></label>
              <input
                v-model="password"
                type="password"
                :placeholder="user.password"
                name="psw"
              />
              <label for="psw"><b>Profile Image</b></label>
              <input
                v-model="image"
                type="text"
                :placeholder="user.image"
                name="img"
              />
              <button type="submit" class="main-button">Save changes</button>
            </form>
          </div>
        </div>

        <!-- Saved invations -->

        <section class="savedInvationsSection">
          <content-rounded-containers
            :area-name="'Saved Invations'"
            :content="user.invations"
            description-name="overview"
            typology="invations"
          ></content-rounded-containers>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ContentRoundedContainers from '~/components/baseElements/ContentRoundedContainers.vue'

export default {
  components: { ContentRoundedContainers },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/users/${id}`)
    const user = data
    return {
      user,
    }
  },
  data() {
    return {
      isModifyMode: false,
      password: '',
      image: '',
      email: '',
    }
  },
  head() {
    return {
      title: 'Invation - ' + this.user.username + ' personal Page',
      meta: [
        {
          name: 'description',
          content: ' Personal page of the user: ' + this.user.username,
        },
        {
          hid: this.user.id,
          name: this.user.username,
          content: this.user.username,
        },
      ],
    }
  },
  computed: {
    experience() {
      const len = this.user.invations.length
      if (len <= 2) {
        return 'NOOB'
      } else if (len > 2 && len <= 5) {
        return 'APPRENTICE'
      } else {
        return 'INVATIONER'
      }
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(String(this.email).toLowerCase())) {
        return ''
      } else if (this.email === '') {
        return ''
      }

      return 'You have entered an invalid email address!'
    },
  },
  methods: {
    updateProfile(e) {
      this.$axios
        .put(`${process.env.BASE_URL}/api/updateProfile/` + this.user.id, {
          password: this.password !== '' ? this.password : this.user.password,
          email: this.email !== '' ? this.email : this.user.email,
          image: this.image !== '' ? this.image : this.user.image,
        })
        .then((result) => {
          this.user = result.data
          location.reload()
        })
        .catch((err) => {
          this.error = err.response.data
        })

      e.preventDefault()
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.profile-container {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

h1 {
  font-weight: 900;
  font-size: 45px;
  line-height: 40px;
  letter-spacing: 1px;
  color: #191a20;
  text-align: center;
}

.user-extra {
  text-align: center;
}

.user-personal-info {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 15px;
  background-color: white;
}

@media screen and (max-width: 900px) {
  .user-extra {
    width: 90%;
    margin-bottom: 80px;
  }
  .user-personal-info {
    width: 90%;
    margin-bottom: 80px;
  }
}

@media screen and (min-width: 900px) {
  .user-extra {
    width: 40%;
  }
  .user-personal-info {
    width: 50%;
  }
}

.user-extra img {
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

label {
  text-transform: uppercase;
  font-weight: 600;
  color: #f38151;
  margin-bottom: 0;
  margin-top: 5px;
  width: 100%;
}

p {
  font-weight: 400;
  font-size: 20px;
  width: 90%;
}

.user-extra p {
  width: 50%;
  margin: 5px auto;
}

.user-extra label {
  margin-top: 20px;
}

.user-personal-info label {
  margin-top: 20px;
  margin-bottom: 5px;
}

.main-button {
  margin-top: 30px;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f1f1f1;
}

input:disabled {
  background-color: white;
}
</style>
