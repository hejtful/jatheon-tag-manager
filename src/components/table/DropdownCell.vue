<template>
  <td>
    <button class="button dropdown-toggle" @click="toggleDropdown">
      <slot name="dropdown-label"></slot>
      <i class="dropdown-icon fas" :class="dropdownClass">
        <dropdown v-if="dropdownActive">
          <slot name="dropdown-content"></slot>
        </dropdown>
      </i>
    </button>
  </td>
</template>

<script>
import Dropdown from '../Dropdown.vue'

export default {
  name: 'dropdown-cell',

  data: () => ({
    dropdownActive: false
  }),

  computed: {
    dropdownClass () {
      return this.dropdownActive ? 'fa-angle-up' : 'fa-angle-down'
    }
  },

  methods: {
    toggleDropdown () {
      this.dropdownActive = !this.dropdownActive
    }
  },

  components: {
    Dropdown
  }
}
</script>

<style scoped lang="scss">

</style>
