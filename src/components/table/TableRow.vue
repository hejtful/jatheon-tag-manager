<template>
  <tr>
    <td>
      <label class="checkbox-container">
        <input
          type="checkbox"
          class="checkbox"
          :checked="isSelected"
          @change="checkThisRow" />
        <span class="checkmark">
          <i class="checkbox-icon fas fa-check" v-show="isSelected"></i>
        </span>
      </label>
    </td>

    <dropdown-cell>
      <template v-slot:dropdown-label>
        <span class="colorful-bg color-indicator" :class="tagColor"></span>
      </template>
      <template v-slot:dropdown-content>
        <div class="color-picker">
          <p class="color-picker-title">Tag Color</p>
          <span
            class="color-picker-item"
            v-for="color in colors"
            :key="color"
            :class="[ { active: color === tagColor }, color ]">
            <span
              class="colorful-bg color-indicator"
              :class="color"
              @click="() => onColorChange(color)">
            </span>
            <i
              class="active-color-icon fas fa-check"
              v-if="color === tagColor">
            </i>
          </span>
        </div>
      </template>
    </dropdown-cell>

    <td>
      <span class="colorful-bg tag-label" :class="tagColor">{{ tagName }}</span>
    </td>

    <td :class="{ unset: taggedItems === 0 }">
      {{ taggedItemsText }}
    </td>

    <td :class="assignedToClasses">
      {{ assignedToText }}
    </td>

    <td :class="{ unset: expungeDate === 'Not Set' }">
      {{ expungeDate }}
    </td>

    <td :class="optionsClasses">
      {{ options }}
    </td>

    <td>
      {{ dateCreated }}
    </td>

    <td>
      {{ createdByText }}
    </td>

    <td>
      <button
        class="button delete-button"
        @click="() => openModal({ rows: [id] })">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'

import DropdownCell from './DropdownCell.vue'

import { trimNthWord } from '../../utils/string'

import colors from '../../config/colors.js'

export default {
  name: 'table-row',

  props: {
    id: {
      type: Number,
      required: true
    },
    tagColor: {
      type: String,
      required: true
    },
    tagName: {
      type: String,
      required: true
    },
    taggedItems: {
      type: Number,
      required: true
    },
    assignedTo: {
      type: String
    },
    expungeDate: {
      type: String,
      default: 'Not Set'
    },
    options: {
      type: String,
      default: 'Not Set'
    },
    dateCreated: {
      type: String,
      required: true
    },
    createdBy: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    colors
  }),

  computed: {
    taggedItemsText () {
      if (this.taggedItems === 0) return 'No Emails'
      else if (this.taggedItems === 1) return '1 Email'
      return this.taggedItems + ' Emails'
    },

    assignedToText () {
      return this.assignedTo ? trimNthWord(this.assignedTo, 1) : 'Not Set'
    },

    assignedToClasses () {
      const isUnset = this.assignedToText === 'Not Set'
      return {
        unset: isUnset,
        bold: !isUnset
      }
    },

    createdByText () {
      return trimNthWord(this.createdBy, 1)
    },

    optionsClasses () {
      const isUnset = this.options === 'Not Set'
      return {
        unset: isUnset,
        bold: !isUnset
      }
    }
  },

  methods: {
    ...mapMutations([
      'selectSingleRow',
      'setAllOnPageSelected',
      'openModal',
      'colorChange'
    ]),

    checkThisRow () {
      this.selectSingleRow({ id: this.id })
      this.setAllOnPageSelected({ value: false })
    },

    onColorChange (value) {
      this.colorChange({ rowId: this.id, value })
    }
  },

  components: {
    DropdownCell
  }
}
</script>

<style scoped lang="scss">
  tr:hover {
    background-color: #E6F7F4;
  }

  td {
    border-bottom: 1px solid #CFCFCF;
    color: #3E4543;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 20px 0;
    text-align: left;
  }

  td:first-child {
    padding-left: 20px;
  }

  td:last-child {
    padding-right: 20px;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  .unset {
    color: #9B9B9B;
  }

  .bold {
    font-weight: 700;
  }

  .color-indicator {
    border-radius: 100%;
    display: inline-block;
    height: 17px;
    width: 17px;
  }

  .color-picker {
    box-sizing: border-box;
    padding: 10px 10px 2px;
    text-align: left;
    width: 155px;
  }

  .color-picker-title {
    color: #3E4543;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin: 0 0 10px;
  }

  .color-picker-item {
    border: 1px solid transparent;
    border-radius: 100%;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    height: 21px;
    margin-bottom: 6px;
    margin-right: 6px;
    padding: 1px;
    position: relative;
    text-align: center;
    width: 21px;

    &:hover, &.active {
      &.red        { border: 1px solid #CF202E; }
      &.dark-red   { border: 1px solid #A41E36; }
      &.cyan       { border: 1px solid #67C8C7; }
      &.green      { border: 1px solid #00A88D; }
      &.dark-green { border: 1px solid #006F63; }
      &.yellowish  { border: 1px solid #C1D42F; }
      &.blue       { border: 1px solid #3DBCE7; }
      &.orange     { border: 1px solid #FC9543; }
      &.yellow     { border: 1px solid #FFE105; }
      &.black      { border: 1px solid #000; }
    }
  }

  .active-color-icon {
    color: #FFF;
    font-size: 12px;
    left: 0;
    line-height: 17px;
    position: absolute;
    right: 0;
  }

  .tag-label {
    border-radius: 3px;
    color: #FFF;
    font-size: 11px;
    font-weight: 700;
    padding: 2px 5px;
    text-transform: uppercase;
  }

  .delete-button {
    background-color: transparent;
    color: #CF202E;
    font-weight: 700;
  }
</style>
