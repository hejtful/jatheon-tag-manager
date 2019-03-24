<template>
  <div class="pagination">
    <div class="per-page-wrapper">
      <span class="per-page-text">ITEMS PER PAGE</span>
      <button class="button dropdown-toggle" @click="toggleDropdown">
        {{ perPage }}
        <i class="dropdown-icon fas" :class="dropdownClass">
          <dropdown v-if="dropdownActive" class="upward">
            <ol class="per-page-list">
              <li
                class="per-page-list-item"
                :class="{ active: option === perPage }"
                v-for="option in perPageOptions"
                :key="option"
                @click="() => setPerPage(option)">
                {{ option }}
              </li>
            </ol>
          </dropdown>
        </i>
      </button>
    </div>

    <div class="controls-wrapper">
      <button
        class="icon-button first-page-button"
        :disabled="page === 1"
        @click="toFirstPage">
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button
        class="icon-button prev-button"
        :disabled="page === 1"
        @click="toPrevPage">
        <i class="fas fa-angle-left"></i>
      </button>

      <input
        type="number"
        class="current-page"
        min="1"
        :max="pages"
        v-model.number="page">
      <span class="max-pages">OF {{ pages }}</span>

      <button
        class="icon-button next-button"
        @click="toNextPage"
        :disabled="page === pages">
        <i class="fas fa-angle-right"></i>
      </button>
      <button
        class="icon-button last-page-button"
        @click="toLastPage"
        :disabled="page === pages">
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Dropdown from './Dropdown.vue'

export default {
  name: 'pagination',

  data: () => ({
    perPageOptions: [ 5, 10, 20, 50, 100 ],
    dropdownActive: false,
    perPage: 10,
    page: 1
  }),

  created () {
    this.changePage()
  },

  computed: {
    ...mapGetters([
      'rowsLength'
    ]),

    dropdownClass () {
      return this.dropdownActive ? 'fa-angle-up' : 'fa-angle-down'
    },

    pages () {
      return Math.ceil(this.rowsLength / this.perPage)
    }
  },

  methods: {
    ...mapMutations([
      'setPage',
      'setAllOnPageSelected',
      'orderBy'
    ]),

    toggleDropdown () {
      this.dropdownActive = !this.dropdownActive
    },

    setPerPage (value) {
      this.perPage = value
    },

    changePage () {
      const to = this.page * this.perPage
      const from = to - this.perPage
      this.setPage({ from, to })
    },

    toFirstPage () {
      this.page = 1
    },

    toNextPage () {
      if (this.page < this.pages) this.page++
    },

    toPrevPage () {
      if (this.page > 1) this.page--
    },

    toLastPage () {
      this.page = this.pages
    }
  },

  watch: {
    rowsLength () {
      this.changePage()
    },

    perPage () {
      this.page = 1
      this.changePage()
      this.orderBy()
    },

    page () {
      this.changePage()
      this.setAllOnPageSelected({ value: false })
      this.orderBy()
    }
  },

  components: {
    Dropdown
  }
}
</script>

<style scoped lang="scss">
  .pagination {
    align-items: center;
    color: #3E4543;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 16px 20px;
  }

  .per-page-wrapper {
    align-items: center;
    display: flex;
  }

  .per-page-text {
    height: 15px;
  }

  .dropdown-toggle {
    color: #00A88D;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  .dropdown-icon {
    color: #00A88D;
  }

  .per-page-list {
    font-size: 12px;
    list-style: none;
    margin: 0;
    padding: 5px 0;
    text-align: left;
  }

  .per-page-list-item {
    cursor: pointer;
    padding: 3px 10px;

    &:hover, &.active {
      background-color: #EEE;
    }
  }

  .controls-wrapper {
    align-items: center;
    display: flex;
  }

  input {
    background-color: #F4F4F4;
    border: 0;
    color: #00A88D;
    font-weight: 700;
    margin-right: 10px;
    outline: none;
    padding: 6px;
    text-align: right;
    width: 38px;
  }

  .max-pages {
    margin-right: 10px;
  }

  .icon-button {
    background-color: transparent;
    border: 0;
    color: #9B9B9B;
    cursor: pointer;
    font-size: 18px;
    margin-right: 10px;
    outline: none;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }

    &:disabled {
      color: #CFCFCF;
      cursor: default;
    }
  }
</style>
