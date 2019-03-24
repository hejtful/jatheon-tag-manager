<template>
  <div class="toolbar">
    <button
      class="button delete-button"
      @click="() => openModal({ rows: selectedRows })"
      :disabled="!selectedRows.length">
      Delete
    </button>
    <span class="selected-info" v-if="selectedRows.length">
      {{ selectedRows.length }} items selected
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'toolbar',

  computed: mapState([
    'selectedRows'
  ]),

  methods: mapMutations([
    'openModal'
  ])
}
</script>

<style scoped lang="scss">
  .toolbar {
    border-bottom: 1px solid #CFCFCF;
    padding: 20px;
  }

  .delete-button {
    background-color: #CF202E;
    border-radius: 4px;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-right: 20px;
    padding: 10px 30px;

    &:hover {
      background-color: lighten(#CF202E, 10);
    }

    &:active {
      background-color: darken(#CF202E, 10);
    }

    &:disabled {
      background-color: transparentize(#CF202E, .5);
      cursor: default;
    }
  }

  .selected-info {
    color: #3E4543;
  }
</style>
