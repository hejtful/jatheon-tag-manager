<template>
  <main class="content">
    <search-bar />
    <toolbar />
    <selectable-table />
    <pagination />
    <modal />
  </main>
</template>

<script>
import SearchBar from './SearchBar.vue'
import Toolbar from './Toolbar'
import SelectableTable from './table/SelectableTable'
import Pagination from './Pagination'
import Modal from './Modal.vue'

export default {
  name: 'page',

  components: {
    SearchBar,
    Toolbar,
    SelectableTable,
    Pagination,
    Modal
  }
}
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    flex: 1 0 774px;
    flex-direction: column;
  }
</style>
