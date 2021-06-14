<template>
  <footer>
    <!-- Preview -->
    <div class="row">
      <div class="col-lg-12">
        <div class="sub-footer">
          <p>
            Copyright &copy; 2021 Invation | Designed by MuseX Group ™
            <button @click="changeStatusFooterVisibility">
              {{ buttonText }}
            </button>
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Body -->
    <transition name="fade">
      <div v-if="footerStatus" class="footer-body">
        <footer-list :title="'Visions'" :link-list="visionLinks"></footer-list>
        <footer-list
          :title="'Useful Links'"
          :link-list="usefulLinks"
        ></footer-list>
        <footer-list
          :title="'Contacts'"
          :link-list="contactInfos"
          :is-contact-list="true"
        ></footer-list>
        <social-icon-bar :social-list="socialIcons"></social-icon-bar>
      </div>
    </transition>
  </footer>
</template>

<script>
import FooterList from "~/components/footer/FooterList.vue";
import SocialIconBar from "~/components/contacts/SocialIconBar.vue";

export default {
  components: {
    FooterList,
    SocialIconBar,
  },
  data() {
    return {
      footerStatus: false,
      buttonText: "↑",
      visionLinks: [
        {
          name: "Education",
          path: "/visions/1",
          active: true,
        },
        {
          name: "Entertainment",
          path: "/visions/2",
          active: true,
        },
        {
          name: "Smart Home",
          path: this.$route.path,
          active: false,
        },
        {
          name: "Work",
          path: this.$route.path,
          active: false,
        },
      ],
      usefulLinks: [
        {
          name: "About",
          path: "/about",
          active: true,
        },
        {
          name: "All Invations",
          path: "/invations",
          active: true,
        },
        {
          name: "All Invationers",
          path: "/invationers",
          active: true,
        },
        {
          name: "Invations by Technology",
          path: "/invations/technologies",
          active: true,
        },
      ],
      contactInfos: [
        {
          info: "Milano, MI, 20137, Italy",
          imgPath: "../contact-icons/address.png",
        },
        {
          info: "info@invations.com",
          imgPath: "../contact-icons/email.png",
        },
        {
          info: "+01 234 567 89",
          imgPath: "../contact-icons/telephone.png",
        },
        {
          info: "+01 234 567 89",
          imgPath: "../contact-icons/fax.png",
        },
      ],
      socialIcons: [
        {
          iconPath: "../contact-icons/facebook.png",
          link: "https://www.facebook.com",
        },
        {
          iconPath: "../contact-icons/linkedin.png",
          link: "https://www.linkedin.com",
        },
        {
          iconPath: "../contact-icons/instagram.png",
          link: "https://www.instagram.com",
        },
        {
          iconPath: "../contact-icons/twitter.png",
          link: "https://www.twitter.com",
        },
      ],
    };
  },
  methods: {
    changeStatusFooterVisibility() {
      this.footerStatus = !this.footerStatus;
      if (this.buttonText === "↑") {
        this.buttonText = "↓";
      } else {
        this.buttonText = "↑";
      }
    },
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  background-image: linear-gradient(#f38151, #f1556a);
  font-family: "Poppins", sans-serif;
  z-index: 20;
}

.sub-footer {
  padding: 10px;
  border-top: 1px solid rgba(250, 250, 250, 0.3);
  text-align: center;
}

.sub-footer p {
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.sub-footer a {
  color: #fff;
}

.sub-footer a:hover {
  color: #fc3;
}

.sub-footer button {
  background-color: transparent;
  width: 30px;
  height: 30px;
  margin: 5px;
  text-align: center;
  color: whitesmoke;
  font-size: 18px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

@media (max-width: 810px) {
  .sub-footer button {
    font-size: 14px;
  }
}

.sub-footer button:focus {
  outline: none;
}

.sub-footer button:hover {
  color: #f1556a;
  background-color: whitesmoke;
  transition: 0.5s;
}

.footer-body {
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
