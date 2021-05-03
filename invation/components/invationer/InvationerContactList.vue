<template>
  <div class="contact-section">
    <h4>CONTACT ME</h4>
    <ul
      class="contact-list"
      data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
    >
      <li
        v-for="(item, itemIndex) of contactInfos"
        :key="'contact-item-' + itemIndex"
      >
        <span>
          {{ contactIconList[itemIndex] }}
        </span>
        <span class="contact-info"> {{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contactInfos: { type: Array, default: () => [] },
  },
  data() {
    return {
      contactIconList: [
        'Telephone: ',
        'Email: ',
        'Fax: ',
        'Linkedin: ',
        'Instagram: ',
      ],
    }
  },
}
</script>

<style scoped>
img {
  width: 15px;
  margin-right: 10px;
}
</style>
