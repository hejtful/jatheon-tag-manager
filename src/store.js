import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

import content from './assets/content'

const matchId = (row, id) => row === id

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: content,

    displayedRows: [],

    selectedRows: [],

    allOnPageSelected: false,

    isModalVisible: false,

    forDeletion: [],

    sortValue: '',

    sortOrder: 'asc'
  },

  getters: {
    rowsLength: state => state.rows.length
  },

  mutations: {
    setPage (state, { from, to }) {
      state.displayedRows = state.rows.slice(from, to)
    },

    selectSingleRow (state, { id }) {
      if (state.selectedRows.find(row => matchId(row, id))) {
        const index = state.selectedRows.indexOf(id)
        state.selectedRows.splice(index, 1)
      } else {
        state.selectedRows.push(id)
      }
    },

    setAllOnPageSelected (state, { value }) {
      state.allOnPageSelected = value
    },

    openModal (state, { rows }) {
      state.forDeletion = rows
      state.isModalVisible = true
    },

    closeModal (state) {
      state.forDeletion = []
      state.isModalVisible = false
    },

    deleteRows (state) {
      state.rows = state.rows.filter(row => !state.forDeletion.includes(row.id))
      state.selectedRows = []
      state.allOnPageSelected = false
      state.forDeletion = []
      state.isModalVisible = false
    },

    orderBy (state, sort = { value: state.sortValue, order: state.sortOrder }) {
      state.sortValue = sort.value
      state.sortOrder = sort.order
      state.displayedRows = _.orderBy(
        state.displayedRows,
        state.sortValue,
        state.sortOrder
      )
    },

    colorChange (state, { rowId, value }) {
      state.rows.find(currentRow => matchId(currentRow.id, rowId)).tagColor = value
    }
  }
})
