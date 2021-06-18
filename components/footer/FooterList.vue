<!-- Component that modelize a list of link or contact infos, to be used in the footer of the website. -->
<template>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="features-item">
      <div class="features-icon">
        <h4>
          {{ title }}
        </h4>
        <div
          v-for="(item, itemIndex) of linkList"
          :key="title + 'link-' + itemIndex"
          class="link-list-element"
        >
          <!-- If the list contains only contact infos (contact icon + label ) -->
          <contact-info
            v-if="contactType"
            :info="item.info"
            :img-path="item.imgPath"
          ></contact-info>
          <!-- Else, the list is a list of links, either active or inactive for design purposes -->
          <nuxt-link
            v-else
            :to="item.path"
            :class="[!item.active ? 'inactive-link' : '']"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from "~/components/contacts/ContactInfo.vue";

export default {
  components: {
    ContactInfo,
  },
  props: {
    title: { type: String, default: () => "" },
    titlePath: { type: String, default: () => "/" },
    linkList: { type: Array, default: () => [] },
    isContactList: { type: Boolean, default: () => false },
  },
  data() {
    return {
      contactType: this.isContactList,
    };
  },
};
</script>

<style scoped>
h4 {
  font-weight: bold;
  color: whitesmoke;
  text-transform: capitalize;
  font-size: 18px;
  text-align: left;
}

div {
  color: whitesmoke;
  font-size: 14px;
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
  text-decoration: underline !important;
}

.features-item {
  border-radius: 5px;
  padding: 20px 30px;
  margin-bottom: 20px;
  text-align: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: auto;
}

.inactive-link {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
