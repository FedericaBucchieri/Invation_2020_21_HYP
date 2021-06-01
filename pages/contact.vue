<template>
  <div class="contact-page">
    <div class="left-image-decor"></div>
    <div class="right-image-decor"></div>
    <div class="container">
      <div class="row">
        <!--  main section of the contact page -->
        <section id="contact-title">
          <breadcrump
            :paths-list="pathsList"
            breadcrump-class="breadcrump-links list"
          ></breadcrump>
          <h1>Contact us!</h1>
          <div class="contact-info-cards">
            <div class="card-contact">
              <h2>Let's contact us!</h2>
              <div
                v-for="(item, itemIndex) of contactInfos"
                :key="'contact-' + itemIndex"
                class="contact-method"
              >
                <img
                  :src="item.imgPath"
                  :alt="item.alt"
                  width="50"
                  height="50"
                />
                <span class="tooltiptext"
                  >{{ item.name }} <br />{{ item.info }}</span
                >
              </div>
            </div>
            <div class="image-contact-container">
              <img
                src="/contact.png"
                alt="contact page decoration image"
                width="470"
                height="491"
              />
            </div>
            <div class="card-contact">
              <h2>Discover us on Social Medias!</h2>
              <div
                v-for="(item, itemIndex) of socialIcons"
                :key="'social-' + itemIndex"
                class="contact-method"
              >
                <a :href="item.link">
                  <img
                    :src="item.iconPath"
                    :alt="item.alt"
                    width="50"
                    height="50"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <a href="#contact-form" class="main-button"> Send Us a Message </a>

        <!-- Contact Form -->
        <section id="contact-form">
          <div class="footer-content">
            <div class="row">
              <!-- ***** Contact Form Start ***** -->
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="contact-form-div">
                  <form id="contact" action="" method="post">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                          />
                        </fieldset>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="E-Mail Address"
                          />
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button class="main-button" @click="fakeSend()">
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- ***** Contact Form End ***** -->
              <div class="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>Let's send a <em>Message</em></h2>
                <p>
                  We love to have a direct contact with all the invationers fan
                  all over the world. Let's chat, exchange idea and maybe your
                  vision will be the next to be shared inside our world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrump from '~/components/baseElements/Breadcrump.vue'

export default {
  components: { Breadcrump },
  data() {
    return {
      pathsList: [
        {
          path: '/about',
          pathName: 'About',
        },
        {
          path: '/about/contact',
          pathName: 'Contact Us',
        },
      ],
      contactInfos: [
        {
          name: 'Address',
          info: 'Milano, MI, 20137, Italy',
          imgPath: '../contact-icons/address.png',
          alt: 'address icons',
        },
        {
          name: 'Email',
          info: 'info@invations.com',
          imgPath: '../contact-icons/email.png',
          alt: 'email icons',
        },
        {
          name: 'Telephone',
          info: '+01 234 567 89',
          imgPath: '../contact-icons/telephone.png',
          alt: 'telephone icons',
        },
        {
          name: 'Fax',
          info: '+01 234 567 89',
          imgPath: '../contact-icons/fax.png',
          alt: 'fax icons',
        },
      ],
      socialIcons: [
        {
          iconPath: '../contact-icons/facebook.png',
          link: 'https://www.facebook.com',
          alt: 'facebook icons',
        },
        {
          iconPath: '../contact-icons/linkedin.png',
          link: 'https://www.linkedin.com',
          alt: 'linkedin icons',
        },
        {
          iconPath: '../contact-icons/instagram.png',
          link: 'https://www.instagram.com',
          alt: 'instagram icons',
        },
        {
          iconPath: '../contact-icons/twitter.png',
          link: 'https://www.twitter.com',
          alt: 'twitter icons',
        },
      ],
    }
  },
  methods: {
    fakeSend() {
      alert('Message sent correctly!')
    },
  },
}
</script>

<style scoped>
#contact-title {
  margin: 100px auto 0 auto;
  width: 100%;
  text-align: center;
}

.contact-info-cards {
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-end;
}

.card-contact {
  width: 90%;
}

.contact-method {
  background-image: linear-gradient(#f38151, #f1556a);
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 75px;
  height: 75px;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 3px;
  position: relative;
  display: inline-block;
}

.contact-method img {
  width: 50px;
  height: 50px;
  padding: 10px;
  margin: 11px;
}

.contact-method .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-image: linear-gradient(#f38151, #f1556a);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 15px;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  margin-left: -125px;
}

.contact-method .tooltiptext::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #f38151 transparent;
}

.contact-method:hover .tooltiptext {
  visibility: visible;
}

@media only screen and (max-width: 810px) {
  .contact-method .tooltiptext {
    position: absolute;
    left: 110px;
    width: initial;
  }
}

@media only screen and (min-width: 810px) {
  .card-contact {
    width: 30%;
  }

  .image-contact-container {
    width: 40%;
  }

  .image-contact-container img {
    width: 90%;
    height: auto;
  }
}

@media only screen and (max-width: 810px) {
  .image-contact-container img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  .card-contact {
    width: 100%;
  }

  .container {
    margin: 0;
    padding: 0;
  }
}

h2 {
  font-size: 28px;
}

.main-button {
  margin: 100px auto 0 auto;
}

#contact-form {
  margin-top: 200px;
  background-image: url(/blob.png);
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
}

@media (min-width: 810px) {
  #contact-form {
    background-position: right center;
  }
}

@media (max-width: 810px) {
  #contact-form {
    background-position: right bottom;
    background-size: auto;
  }
}

@media (max-width: 992px) {
  .contact-form-div {
    margin-bottom: 45px;
    padding: 60px 0px !important;
  }
}

.contact-form-div {
  position: relative;
  padding: 45px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.contact-form-div input,
.contact-form-div textarea {
  color: #555;
  font-size: 13px;
  border: 1px solid #eee;
  background-color: #f7f7f7;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
}

.contact-form-div textarea {
  height: 150px;
  resize: none;
  padding: 20px;
}

.contact-form-div {
  text-align: center;
}

#contact-form h2 {
  color: white;
  text-align: left;
  text-transform: none;
}

#contact-form p {
  width: 80%;
}

.contact-form-div ::-webkit-input-placeholder {
  /* Edge */
  color: #555;
}

.contact-form-div :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #555;
}

.contact-form-div ::placeholder {
  color: #555;
}

.footer-content {
  padding: 120px 0px;
}

.right-content {
  align-self: center;
}

.footer-content .right-content {
  color: #fff;
}

.footer-content .right-content h2 {
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 42px;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 1px;
}

.footer-content .right-content h2 em {
  font-style: normal;
  color: #fba70b;
}

.footer-content .right-content p {
  color: #fff;
}

.footer-content .right-content a {
  color: #fff;
}

.footer-content .right-content a:hover {
  color: #fc3;
}
</style>
