<template>
  <div class="table-wrapper">
    <table cellspacing="0">
      <thead>
        <tr>
          <th>
            <label class="checkbox-container">
              <input
                type="checkbox"
                class="checkbox"
                :checked="allOnPageSelected"
                @change="selectAllOnPage" />
              <span class="checkmark">
                <i class="checkbox-icon fas fa-minus"
                   v-show="!allOnPageSelected"></i>
                <i class="checkbox-icon fas fa-check"
                   v-show="allOnPageSelected"></i>
              </span>
            </label>
          </th>
          <th>COLOR</th>
          <th>TAG NAME</th>
          <th>TAGGED ITEMS</th>
          <th>ASSIGNED TO</th>
          <th>EXPUNGE DATE</th>
          <th>OPTIONS</th>
          <th
            class="clickable-th"
            :class="{ active: active === 'dateCreated' }"
            @click="() => orderByValue('dateCreated')">
            DATE CREATED
            <i
              class="order-icon fas"
              :class="orderClass"></i>
          </th>
          <th>CREATED BY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>

      <tbody>
        <table-row
          v-for="row in displayedRows"
          :key="row.id"
          v-bind="row"
          :is-selected="isSelected(row.id)" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import TableRow from './TableRow.vue'

export default {
  name: 'selectable-table',

  data: () => ({
    active: '',
    order: 'asc'
  }),

  computed: {
    ...mapState([
      'displayedRows',
      'selectedRows',
      'allOnPageSelected'
    ]),

    orderClass () {
      return this.order === 'asc' ? 'fa-angle-down' : 'fa-angle-up'
    }
  },

  methods: {
    ...mapMutations([
      'selectSingleRow',
      'setAllOnPageSelected',
      'orderBy'
    ]),

    selectAllOnPage () {
      let preselectedCount = 0

      this.displayedRows.forEach(row => {
        if (!this.isSelected(row.id)) {
          this.selectSingleRow(row)
        } else {
          preselectedCount++
        }
      })

      if (preselectedCount === this.displayedRows.length) {
        this.unselectAllOnPage()
        this.setAllOnPageSelected({ value: false })
      } else {
        this.setAllOnPageSelected({ value: true })
      }
    },

    unselectAllOnPage () {
      this.displayedRows.forEach(row => {
        if (this.isSelected(row.id)) {
          this.selectSingleRow(row)
        }
      })
    },

    isSelected (id) {
      return this.selectedRows.includes(id)
    },

    orderByValue (value) {
      this.active = value
      this.order = this.order === 'asc' ? 'desc' : 'asc'
      this.orderBy({ value, order: this.order })
    }
  },

  components: {
    TableRow
  }
}
</script>

<style scoped lang="scss">
  .table-wrapper {
    border-bottom: 1px solid #CFCFCF;
    flex-grow: 1;
    overflow-y: auto;
  }

  table {
    width: 100%;
  }

  th {
    border-bottom: 1px solid #CFCFCF;
    color: #3E4543;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    padding: 16px 0;
    text-align: left;
  }

  th:first-child {
    padding-left: 20px;
  }

  th:last-child {
    padding-right: 20px;
  }

  .clickable-th {
    cursor: pointer;

    &:hover, &.active {
      color: #00A88D;
    }
  }

  .order-icon {
    font-size: 18px;
    line-height: 14px;
    vertical-align: sub;
  }
</style>
