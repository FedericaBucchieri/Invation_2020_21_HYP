<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="/" class="logo"> Invation </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul
              class="nav"
              :style="{
                display: myDisplay,
                'margin-top': myMarginTop + 'px !important',
              }"
            >
              <li
                v-for="theHeaderMenuItem in theHeaderMenuItems"
                :key="theHeaderMenuItem.name"
                class="submenu"
              >
                <menu-item
                  :the-header-menu-item-name="theHeaderMenuItem.name"
                  :the-header-menu-item-extensions="
                    theHeaderMenuItem.extensions
                  "
                  :the-header-menu-item-path="theHeaderMenuItem.path"
                  :is-activated="isActive"
                ></menu-item>
              </li>
            </ul>
            <a
              class="menu-trigger"
              :class="{ active: isActive }"
              @click="changeMyDisplay"
            >
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
import MenuItem from "./TheHeader/MenuItem.vue";

export default {
  components: { MenuItem },
  data() {
    return {
      // Flag indicating if an item in the header is the active one, meaning that the user has clicked on it last time
      isActive: false,
      // Containing the display CSS attribute to be assigned to the appearing sub-menu on the header
      myDisplay: "none",
      // Containing the margin CSS attribute to be assigned to the appearing sub-menu on the header
      myMarginTop: 20,
      // Object containing every information about the items on the header useful to display thier name and
      // reference them through the routing, including the information about their extensions
      theHeaderMenuItems: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          extensions: [{ nameExtension: "Contact Us", path: "/contact" }],
          path: "/about",
        },
        {
          name: "Invationers",
          extensions: [],
          path: "/invationers",
        },
        {
          name: "Visions",
          extensions: [
            { nameExtension: "Education", path: "/visions/1" },
            { nameExtension: "Entertainment", path: "/visions/2" },
            { nameExtension: "Smart Home", path: "/visions/3" },
            { nameExtension: "Work", path: "/visions/4" },
          ],
          path: "/visions",
        },
        {
          name: "Invations",
          extensions: [
            {
              nameExtension: "By technologies",
              path: "/invations/technologies",
            },
          ],
          path: "/invations",
        },
      ],
    };
  },
  methods: {
    changeMyDisplay() {
      if (this.myDisplay === "none") {
        this.myDisplay = "block";
        this.myMarginTop = 0;
      } else {
        this.myDisplay = "none";
        this.myMarginTop = 20;
      }
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
header {
  background-color: white;
  position: fixed;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

.background-header {
  background-color: #fff;
  height: 80px !important;
  position: fixed !important;
  top: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15) !important;
}

.background-header .logo,
.background-header .main-nav .nav li a {
  color: #1e1e1e !important;
}

.background-header .main-nav .nav li:hover a {
  color: #fba70b !important;
}

.background-header .nav li a.active {
  color: #fba70b !important;
}

.header-area {
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  height: 80px;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}

.header-area .main-nav {
  min-height: 80px;
  background: transparent;
}

.header-area .main-nav .logo {
  line-height: 80px;
  color: #191a20;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  float: left;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.header-area .main-nav .nav {
  float: left;
  margin-top: 27px;
  margin-left: 5%;
  margin-right: 0px;
  background-color: #fff;
  padding: 0px 20px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 999;
}

.header-area .main-nav .nav li {
  padding-left: 20px;
  padding-right: 20px;
}

.header-area .main-nav .nav li:last-child {
  padding-right: 0px;
}

.header-area .main-nav .nav li a {
  display: block;
  font-weight: 500;
  font-size: 13px;
  color: black;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  height: 40px;
  line-height: 40px;
  border: transparent;
  letter-spacing: 1px;
}

.header-area .main-nav .nav li:hover a {
  color: #fba70b;
}

.header-area .main-nav .nav li.submenu {
  position: relative;
  padding-right: 35px;
}

.header-area .main-nav .nav li.submenu:after {
  font-family: FontAwesome;
  font-size: 12px;
  color: #7a7a7a;
  position: absolute;
  right: 18px;
  top: 12px;
}

.header-area .main-nav .nav li.submenu ul {
  position: absolute;
  width: 200px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  top: 40px;
  opacity: 0;
  transform: translateY(-2em);
  visibility: hidden;
  z-index: -1;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 0.01s;
}

.header-area .main-nav .nav li.submenu ul li {
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

.header-area .main-nav .nav li.submenu ul li a {
  display: block;
  background: #fff;
  color: #000;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  font-size: 13px;
  border-bottom: 1px solid #f5f5f5;
}

.header-area .main-nav .nav li.submenu ul li a:before {
  content: "";
  position: absolute;
  width: 0px;
  height: 40px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: #fba70b;
}

.header-area .main-nav .nav li.submenu ul li a:hover {
  background: #fff;
  color: #fba70b !important;
  padding-left: 25px;
}

.header-area .main-nav .nav li.submenu ul li a:hover:before {
  width: 3px;
}

.header-area .main-nav .nav li.submenu:hover ul {
  visibility: visible;
  opacity: 1;
  z-index: 1;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.3s;
}

.header-area .main-nav .menu-trigger {
  cursor: pointer;
  display: block;
  position: absolute;
  top: 23px;
  width: 32px;
  height: 40px;
  text-indent: -9999em;
  z-index: 99;
  right: 15%;
  display: none;
}

.header-area .main-nav .menu-trigger span,
.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  background-color: #1e1e1e;
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 0;
}

.background-header .main-nav .menu-trigger span,
.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
  background-color: #1e1e1e;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  background-color: #1e1e1e;
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 0;
  width: 75%;
}

.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
  background-color: #1e1e1e;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  content: "";
}

.header-area .main-nav .menu-trigger span {
  top: 16px;
}

.header-area .main-nav .menu-trigger span:before {
  -moz-transform-origin: 33% 100%;
  -ms-transform-origin: 33% 100%;
  -webkit-transform-origin: 33% 100%;
  transform-origin: 33% 100%;
  top: -10px;
  z-index: 10;
}

.header-area .main-nav .menu-trigger span:after {
  -moz-transform-origin: 33% 0;
  -ms-transform-origin: 33% 0;
  -webkit-transform-origin: 33% 0;
  transform-origin: 33% 0;
  top: 10px;
}

.header-area .main-nav .menu-trigger.active span,
.header-area .main-nav .menu-trigger.active span:before,
.header-area .main-nav .menu-trigger.active span:after {
  background-color: transparent;
  width: 100%;
}

.header-area .main-nav .menu-trigger.active span:before {
  -moz-transform: translateY(6px) translateX(1px) rotate(45deg);
  -ms-transform: translateY(6px) translateX(1px) rotate(45deg);
  -webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
  transform: translateY(6px) translateX(1px) rotate(45deg);
  background-color: #1e1e1e;
}

.background-header .main-nav .menu-trigger.active span:before {
  background-color: #1e1e1e;
}

.header-area .main-nav .menu-trigger.active span:after {
  -moz-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  -ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  -webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  transform: translateY(-6px) translateX(1px) rotate(-45deg);
  background-color: #1e1e1e;
}

.background-header .main-nav .menu-trigger.active span:after {
  background-color: #1e1e1e;
}

.header-area.header-sticky {
  min-height: 80px;
}

.header-area.header-sticky .nav {
  margin-top: 20px !important;
}

.header-area.header-sticky .nav li a.active {
  color: #fba70b;
}

@media (max-width: 1200px) {
  .header-area .main-nav .nav li {
    padding-left: 12px;
    padding-right: 12px;
  }
  .header-area .main-nav:before {
    display: none;
  }
}

@media (max-width: 991px) {
  .logo {
    text-align: center;
    float: none !important;
  }
  .header-area {
    background-color: #f7f7f7;
    padding: 0px 15px;
    height: 80px;
    box-shadow: none;
    text-align: center;
  }
  .header-area .container {
    padding: 0px;
  }
  .header-area .logo {
    text-align: center;
    margin-left: -13%;
  }
  .header-area .menu-trigger {
    display: block !important;
  }
  .header-area .main-nav {
    overflow: hidden;
  }
  .header-area .main-nav .nav {
    float: none;
    width: 100%;
    margin-top: 0px !important;
    display: none;
    -webkit-transition: all 0s ease 0s;
    -moz-transition: all 0s ease 0s;
    -o-transition: all 0s ease 0s;
    transition: all 0s ease 0s;
    margin-left: 0px;
  }
  .header-area .main-nav .nav li:first-child {
    border-top: 1px solid #eee;
  }
  .header-area .main-nav .nav li {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .header-area .main-nav .nav li a {
    height: 50px !important;
    line-height: 50px !important;
    padding: 0px !important;
    border: none !important;
    background: #f7f7f7 !important;
    color: #191a20 !important;
  }
  .header-area .main-nav .nav li a:hover {
    background: #eee !important;
    color: #fba70b !important;
  }
  .header-area .main-nav .nav li.submenu ul {
    position: relative;
    visibility: inherit;
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
    top: 0px;
    width: 100%;
    box-shadow: none;
    height: 0px;
  }
  .header-area .main-nav .nav li.submenu ul li a {
    font-size: 12px;
    font-weight: 400;
  }
  .header-area .main-nav .nav li.submenu ul li a:hover:before {
    width: 0px;
  }
  .header-area .main-nav .nav li.submenu ul.active {
    height: auto !important;
  }
  .header-area .main-nav .nav li.submenu:after {
    color: #3b566e;
    right: 25px;
    font-size: 14px;
    top: 15px;
  }
  .header-area .main-nav .nav li.submenu:hover ul,
  .header-area .main-nav .nav li.submenu:focus ul {
    height: 0px;
  }
}

@media (min-width: 992px) {
  .header-area .main-nav .nav {
    display: flex !important;
  }
}

.header-area.header-sticky {
  min-height: 80px;
}

.header-area.header-sticky .nav {
  margin-top: 20px !important;
}

.header-area.header-sticky .nav li a.active {
  color: #fba70b;
}
</style>
