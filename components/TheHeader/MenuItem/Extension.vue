<!-- This component modelize the extension to each navbar menu tab -->
<template>
  <nuxt-link
    :class="{ disabled: myDisable }"
    :to="theHeaderMenuItemExtensionPath"
    >{{ theHeaderMenuItemExtensionName }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    // the name of the Extension.vue
    theHeaderMenuItemExtensionName: { type: String, default: () => "" },
    // the path of the link associated to this instance
    theHeaderMenuItemExtensionPath: { type: String, default: () => "" },
    // a boolean needed to know if the link to the content of the extension should be reachable or not
    disabled: { type: Boolean, default: () => false },
  },
  data() {
    return {
      myDisable: this.disabled,
    };
  },
  mounted() {
    // this method is used to compute the value of the prop disabled
    this.myDisable =
      this.theHeaderMenuItemExtensionName === "Work" ||
      this.theHeaderMenuItemExtensionName === "Smart Home";
  },
};
</script>

<style scoped>
.disabled {
  color: lightgrey !important;
  pointer-events: none;
  /*cursor: not-allowed;*/
}
.background-header .logo,
.background-header .main-nav .nav li a {
  color: #1e1e1e;
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
  color: black;
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
    background: white !important;
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
