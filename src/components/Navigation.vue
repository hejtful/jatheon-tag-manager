<template>
  <aside>
    <div class="logo-container">
      <img class="logo-image" src="../assets/logo.png" />
      <span class="logo-text">
        JAT<b>HEON</b>
      </span>
      <span class="logo-text-super">CLOUD</span>
    </div>
    <ul>
      <nav-item
        v-for="page in pages"
        :key="page.id"
        :icon="page.icon"
        :text="page.text"
        :active="page.active" />
    </ul>
  </aside>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  name: 'navigation',

  data: () => ({
    pages: [
      { id: 'dashboard', icon: 'align-left', text: 'Dashboard' },
      { id: 'search', icon: 'search', text: 'Search' },
      { id: 'saved-searches', icon: 'save', text: 'Saved Searches' },
      { id: 'clipboard', icon: 'clipboard', text: 'Clipboard' },
      { id: 'recent-searches', icon: 'search', text: 'Recent Searches' },
      { id: 'keywords', icon: 'font', text: 'Keywords' },
      { id: 'tag-manager', icon: 'tag', text: 'Tag Manager', active: true },
      { id: 'settings', icon: 'cog', text: 'Settings' }
    ]
  }),

  components: {
    NavItem
  }
}
</script>

<style scoped lang="scss">
  aside {
    background-color: #E1E7E9;
    box-sizing: border-box;
    flex: 0 0 250px;
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
    width: 250px;
  }

  .logo-container {
    margin-bottom: 30px;
  }

  .logo-image {
    margin-right: 10px;
    width: 45px;
  }

  .logo-text {
    color: #747978;
    font-size: 16px;
    letter-spacing: 2px;
  }

  .logo-text-super {
    color: #00A88D;
    font-size: 10px;
    letter-spacing: 1px;
    vertical-align: super;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
