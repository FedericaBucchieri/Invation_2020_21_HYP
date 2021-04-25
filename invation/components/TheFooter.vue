<template>
  <footer>
    <div class="footerPreview">
      Copyright © 2021 Invation | Designed by MuseX Group ™
      <button @click="changeStatusFooterVisibility">
        {{ this.buttonText }}
      </button>
    </div>
    <transition name="fade">
      <table v-if="footerStatus" class="footerBody">
        <thead>
          <tr>
            <th>
              <!-- to All Visions Page -->
              <nuxt-link to="/">Visions</nuxt-link>
            </th>
            <th>
              <!-- No link -->
              Usefull links
            </th>
            <th>
              <!-- No link -->
              Contact
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- Visions Links -->
            <td class="column-info">
              <p
                v-for="(item, itemIndex) of visionLinks"
                :key="'vision-link-' + itemIndex"
                class="link-list-element"
              >
                <nuxt-link :to="item.path">
                  {{ item.name }}
                </nuxt-link>
              </p>
            </td>
            <!-- Usefull Links -->
            <td class="column-info">
              <p
                v-for="(item, itemIndex) of usefullLinks"
                :key="'usefull-link-' + itemIndex"
                class="link-list-element"
              >
                <nuxt-link :to="item.path">
                  {{ item.name }}
                </nuxt-link>
              </p>
            </td>
            <!-- Contact -->
            <td class="column-info">
              <p
                v-for="(item, itemIndex) of contactInfos"
                :key="'contact-info-' + itemIndex"
              >
                <base-contact-info
                  :info="item.info"
                  :img-path="item.imgPath"
                ></base-contact-info>
              </p>
            </td>
            <td class="social-info-container">
              <ul>
                <li
                  v-for="(item, itemIndex) of socialIcons"
                  :key="'social-' + itemIndex"
                  class="social-list-element"
                >
                  <base-social-icon
                    :icon-path="item.iconPath"
                    :link="item.link"
                  ></base-social-icon>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </transition>
  </footer>
</template>

<script>
import BaseContactInfo from '~/components/contacts/BaseContactInfo.vue'
import BaseSocialIcon from '~/components/contacts/BaseSocialIcon.vue'

export default {
  components: {
    BaseContactInfo,
    BaseSocialIcon,
  },
  data() {
    return {
      footerStatus: false,
      buttonText: '+',
      visionLinks: [
        {
          name: 'Education',
          path: '/',
        },
        {
          name: 'Entertainment',
          path: '/',
        },
        {
          name: 'Smart Home',
          path: '/',
        },
        {
          name: 'Smart Work',
          path: '/',
        },
      ],
      usefullLinks: [
        {
          name: 'How to Get Here',
          path: '/',
        },
        {
          name: 'All Invations',
          path: '/',
        },
        {
          name: 'All Invationers',
          path: '/',
        },
        {
          name: 'Invations by Technology',
          path: '/',
        },
      ],
      contactInfos: [
        {
          info: 'Milano, MI, 20137, Italy',
          imgPath: '../contact-icons/address.png',
        },
        {
          info: 'info@invations.com',
          imgPath: '../contact-icons/email.png',
        },
        {
          info: '+01 234 567 89',
          imgPath: '../contact-icons/telephone.png',
        },
        {
          info: '+01 234 567 89',
          imgPath: '../contact-icons/fax.png',
        },
      ],
      socialIcons: [
        {
          iconPath: '../contact-icons/facebook.png',
          link: 'https://www.facebook.com',
        },
        {
          iconPath: '../contact-icons/linkedin.png',
          link: 'https://www.linkedin.com',
        },
        {
          iconPath: '../contact-icons/instagram.png',
          link: 'https://www.instagram.com',
        },
        {
          iconPath: '../contact-icons/twitter.png',
          link: 'https://www.twitter.com',
        },
      ],
    }
  },
  methods: {
    changeStatusFooterVisibility() {
      this.footerStatus = !this.footerStatus
      if (this.buttonText === '+') {
        this.buttonText = '-'
      } else {
        this.buttonText = '+'
      }
    },
  },
}
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  height: auto;
  width: 100%;
  background-image: linear-gradient(#f38151, #f1556a);
  font-family: 'Poppins', sans-serif;
}

table {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}

th {
  font-weight: bold;
  color: whitesmoke;
  text-transform: capitalize;
  font-size: 18px;
  text-align: left;
}

td {
  color: whitesmoke;
  font-size: 14px;
  text-align: left;
  vertical-align: top;
  width: 33%;
}

.column-info {
  width: 13%;
}

.link-list-element {
  margin: 5px 0;
}

a.nuxt-link-exact-active {
  color: #fba70b;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #fba70b;
}

.logo {
  color: #191a20 !important;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.social-info-container {
  text-align: center;
}

ul {
  display: inline-flex;
  text-align: center;
}

li {
  list-style-type: none;
}

.footerPreview {
  color: whitesmoke;
  font-size: 16px;
  margin: 5px;
  text-align: center;
}

.footerBody {
  border-top: 1px solid rgba(255, 255, 255, 0.87);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

button {
  background-color: transparent;
  width: 30px;
  height: 30px;
  margin: 10px;
  text-align: center;
  color: whitesmoke;
  font-size: 24px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

button:hover {
  color: #f1556a;
  background-color: whitesmoke;
  transition: 0.5s;
}
</style>
