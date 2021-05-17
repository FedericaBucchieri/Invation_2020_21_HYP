<!--
    Works with unordered lists. Iterates over list items on the DOM.
    If there is no unordered list or list items can have unexpected
    behaviours. Best practice is to put this element before and outside
    a div containing the passed Ul
    @prop isCaseSensitive flag to decide whether the research
        has to be case sensitive
    @prop idUL id of the unordered list
    @prop tagToSearch name of the tag to look for. Must have a text
        in position [0] as child (es. h1, h2, h3, ...)
 -->
<template>
  <div class="search-container">
    <input
      id="searchInput"
      type="text"
      :placeholder="`Search for ${placeholderKeyword}`"
      @keyup="searchFunction(isCaseSensitive)"
    />
  </div>
</template>

<script>
export default {
  props: {
    isCaseSensitive: { type: Boolean, default: () => false },
    idUl: { type: String, default: () => '' },
    tagToSearch: { type: String, default: () => '' },
    placeholderKeyword: { type: String, default: () => 'invationers' },
  },
  methods: {
    searchFunction(isCaseSensitive) {
      // Declare variables
      const input = document.getElementById('searchInput')
      let filter
      if (isCaseSensitive) {
        filter = input.value
      } else {
        filter = input.value.toUpperCase()
      }
      // const ul = document.getElementById(this.idUl)
      console.log(this.idUl + ' > li')
      const li = document.querySelectorAll('#' + this.idUl + ' > li')
      console.log(li)
      // Loop through all list items, and hide those who don't match the search query
      for (let i = 0; i < li.length; i++) {
        const h5 = li[i].getElementsByTagName(this.tagToSearch)[0]
        console.log(li.length)
        const txtValue = h5.textContent || h5.innerText
        if (txtValue.toUpperCase().includes(filter)) {
          li[i].style.display = ''
        } else {
          li[i].style.display = 'none'
        }
      }
    },
  },
}
</script>

<style scoped>
.search-container {
  width: 100%;
}
.search-container input {
  width: 100%;
  margin: 30px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 20px;
}
</style>
