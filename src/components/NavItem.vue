<template>
  <li class="nav-item" :class="{ active }">
    <i :class="className"></i>
    {{ text }}
  </li>
</template>

<script>
export default {
  name: 'nav-item',

  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    className () {
      return `fas fa-${this.icon}`
    }
  }
}
</script>

<style scoped lang="scss">
  i {
    margin-right: 16px;
  }

  li {
    color: #747978;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 42px;
    text-align: left;

    &:hover {
      color: #00A88D;
    }

    &.active {
      color: #3E4543;
    }
  }
</style>
