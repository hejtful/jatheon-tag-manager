<template>
  <div class="dropdown">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'dropdown',

  props: {

  },

  computed: {

  },

  methods: {

  }
}
</script>

<style lang="scss">
  .dropdown-toggle {
    align-items: center;
    background: transparent;
    display: flex;
  }

  .dropdown-icon {
    color: #9B9B9B;
    font-size: 18px;
    margin-left: 5px;
    position: relative;
  }

  .dropdown {
    background-color: #FFF;
    border: 1px solid #CFCFCF;
    border-radius: 4px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
    cursor: default;
    left: -20px;
    position: absolute;
    top: 25px;
    z-index: 1;

    &.upward {
      bottom: 25px;
      top: unset;
    }
  }
</style>
