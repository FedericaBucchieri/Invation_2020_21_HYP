<!--  Bar for Social Icons. It contains more social icons adding a title to the set of icons -->
<template>
  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="features-item">
      <div class="features-icon">
        <h4>Discover Us On the Social Media!</h4>
        <div
          v-for="(item, itemIndex) of socialList"
          :key="'icon-' + itemIndex"
          class="social-icon-list"
        >
          <social-icon
            :icon-path="item.iconPath"
            :link="item.link"
          ></social-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "~/components/contacts/SocialIcon.vue";

export default {
  components: { SocialIcon },
  props: {
    socialList: { type: Array, default: () => [] },
  },
};
</script>

<style scoped>
.features-icon {
  text-align: center;
}

.social-icon-list {
  display: inline-flex;
  flex-wrap: wrap;
}

h4 {
  color: whitesmoke;
  text-transform: capitalize;
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
}

.features-item {
  border-radius: 5px;
  padding: 20px 30px;
  margin-bottom: 20px;
  text-align: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: auto;
}
</style>
