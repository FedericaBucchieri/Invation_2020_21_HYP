<!-- the component that handles the items of the navbar -->
<template>
  <div>
    <div>
      <nuxt-link :class="{ highlight: highlighted }" :to="theHeaderMenuItemPath"
        >{{ theHeaderMenuItemName }}
        <img
          v-if="!isActivated && myTheHeaderMenuItemExtensions != 0"
          src="~/static/decor/down-arrow.png"
          class="menu-item-arrow"
          :alt="'menu-element' + theHeaderMenuItemName"
          @click="changeDisplayItemExtensions"
          width="10"
          height="10"
      /></nuxt-link>
      <img
        v-if="isActivated && myTheHeaderMenuItemExtensions != 0"
        src="~/static/decor/down-arrow.png"
        class="menu-item-arrow"
        :alt="'menu-element' + theHeaderMenuItemName"
        @click="changeDisplayItemExtensions"
        width="10"
        height="10"
      />
    </div>
    <ul :class="{ active: isActive }">
      <li
        v-for="extension in myTheHeaderMenuItemExtensions"
        :key="extension.nameExtension"
      >
        <the-header-menu-item-extension
          :the-header-menu-item-extension-name="extension.nameExtension"
          :the-header-menu-item-extension-path="extension.path"
        ></the-header-menu-item-extension>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // the name of the MenuItem that is displayed in the navbar
    theHeaderMenuItemName: { type: String, default: () => "" },
    // the path of the link associated to that MenuItem (Home, About, Invations, Invationers, Visions)
    theHeaderMenuItemPath: { type: String, default: () => "" },
    // the list of the Extension.vue that are sub-items of the MenuItem. For example Visions --extensions--> (Education, Entertainment, Work, Smart Home)
    theHeaderMenuItemExtensions: { type: Array, default: () => [] },
    // a boolean used to handle the change of the style when the window becomes small enough
    isActivated: { type: Boolean, default: false },
  },
  data() {
    return {
      // a boolean used to handle the change of the style when the window becomes small enough
      isActive: false,
      // this data is just a copy of the prop theHeaderMenuItemExtensions, it is needed to perform a v-for on this array
      myTheHeaderMenuItemExtensions: this.theHeaderMenuItemExtensions,
      // a boolean used to highlight with the style the MenuItem in which the user is situated
      highlighted: false,
    };
  },
  watch: {
    // the father of MenuItem that is TheHeader that is passing the prop is Activate can change the value of this prop and this method is used to know when it happens to handle the change of the style when the window becomes small enough
    isActivated() {
      if (!this.isActivated) this.isActive = false;
    },
  },
  methods: {
    // this method is used to handle the change of the style of the navbar
    changeDisplayItemExtensions() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    // this mounted is used to listen to a custom event that is created in the breadcrump and it is used to update the value of the data highlight, used to show in which area of the site the user is situated
    this.$root.$on("location-from-breadcrump", (location) => {
      if (this.theHeaderMenuItemName.toUpperCase() === location.toUpperCase()) {
        this.highlighted = true;
      } else {
        this.highlighted = false;
      }
    });
  },
};
</script>

<style scoped>
.menu-item-arrow {
  height: 10px;
  width: auto;
}

.highlight {
  font-weight: bold !important;
  text-decoration: underline !important;
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
    margin-left: 30px;
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

.alias-item {
  font-size: 12px;
  color: white;
  background: linear-gradient(
    145deg,
    rgba(244, 129, 63, 1) 0%,
    rgba(241, 85, 106, 1) 100%
  );
  color: white;
  padding: 3px;
  border-radius: 2px;
  text-align: center;
  margin-top: -10px;
}
</style>
