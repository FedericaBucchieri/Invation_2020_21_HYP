<template>
  <form class="modal-content animate" method="post" @submit.prevent="register">
    <div class="imgcontainer">
      <span class="close" title="Close Modal" @click="hideForm">&times;</span>
      <img
        src="/founders.png"
        alt="Avatar"
        class="avatar"
        width="150"
        height="auto"
      />
    </div>

    <div class="container">
      <label for="uname"><b>Email</b></label>
      <input
        v-model="email"
        type="text"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="uname"><b>Username</b></label>
      <input
        v-model="username"
        type="text"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <label for="psw"><b>Repeat Password</b></label>
      <input
        v-model="repeat"
        type="password"
        placeholder="Repeat Password"
        name="repeat"
        required
      />
      <div class="errorMessage">{{ validatePassword }}</div>
      <div class="errorMessage">{{ validateEmail }}</div>
      <div class="errorMessage">{{ error }}</div>

      <button type="submit" class="main-button">Register</button>
    </div>

    <div class="modal-footer">
      <span class="psw">
        <a @click="formHandler">Already Registred? Login ! </a></span
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      repeat: '',
      email: '',
      error: '',
      user: {},
    }
  },
  computed: {
    validatePassword() {
      if (this.password === this.repeat) {
        return ''
      } else {
        return 'The two passwords are not matching.'
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
    hideForm() {
      document.getElementById('loginForm').style.display = 'none'
    },
    formHandler(e) {
      this.$emit('switchForm')
    },
    register(e) {
      this.$axios
        .post(`${process.env.BASE_URL}/api/registration`, {
          username: this.username,
          password: this.password,
          repeat: this.repeat, // check both CS and SS
          email: this.email,
          image: '/user-profile-basic.png',
        })
        .then((result) => {
          this.user = result.data
          this.$auth.$storage.setLocalStorage('username', this.user.username)
          this.$auth.$storage.setLocalStorage('userId', this.user.id)
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
/* Full-width input fields */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f1f1f1;
}

label {
  margin-bottom: 0 !important;
}

/* Set a style for all buttons */
button {
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  cursor: pointer;
  width: 40%;
  display: block;
}

button:hover {
  opacity: 0.8;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
  cursor: pointer;
}

span.psw:hover {
  color: #f95c65;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  border-radius: 10px;
}

@media screen and (max-width: 900px) {
  .modal-content {
    width: 90%;
    margin-top: 20%;
  }
}

@media screen and (max-width: 1024px) {
  .modal-content {
    margin-top: 20%;
  }
}

@media screen and (min-width: 900px) {
  .modal-content {
    width: 360px;
  }
}

.modal-footer {
  background-color: #f1f1f1;
  border-radius: 0 0px 10px 10px;
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

b {
  text-transform: uppercase;
}

.errorMessage {
  color: red;
  margin: 10px auto;
  text-align: center;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
