<template>
  <div id="app">
    <navigation />
    <page />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Page from './components/Page.vue'

export default {
  name: 'app',

  components: {
    Navigation,
    Page
  }
}
</script>

<style lang="scss">
  @import 'normalize-scss';
  @include normalize();

  * {
    font-family: 'Open Sans';
  }

  body {
    overflow: hidden;
  }

  #app {
    display: flex;
    height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .button {
    border: 0;
    cursor: pointer;
    outline: none;
  }

  .colorful-bg {
    &.red        { background-color: #CF202E; }
    &.dark-red   { background-color: #A41E36; }
    &.cyan       { background-color: #67C8C7; }
    &.green      { background-color: #00A88D; }
    &.dark-green { background-color: #006F63; }
    &.yellowish  { background-color: #C1D42F; }
    &.blue       { background-color: #3DBCE7; }
    &.orange     { background-color: #FC9543; }
    &.yellow     { background-color: #FFE105; }
    &.black      { background-color: #000; }
  }

  .checkbox-container {
    cursor: pointer;
    display: block;
    height: 17px;
    margin-right: 5px;
    padding-left: 17px;
    position: relative;
    width: 0;
  }

  .checkbox {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .checkmark {
    background-color: #FFFFFF;
    border: 1px solid #9B9B9B;
    border-radius: 4px;
    box-sizing: border-box;
    height: 17px;
    left: 0;
    line-height: 14px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 17px;
  }

  .checkbox-icon {
    font-size:10px;
  }

  .checkbox-container:hover .checkmark {
    background-color: #00A88D;
    border: 1px solid #00A88D;
    color: #FFF;
  }

  .checkbox-container .checkbox:checked ~ .checkmark {
    background-color: #00A88D;
    border: 1px solid #00A88D;
    color: #FFF;
  }
</style>
