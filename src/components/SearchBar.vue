<template>
  <header>
    <div class="search-input-holder">
      <input
        class="search-input"
        placeholder="Search by keyword, user, date or action" />
      <i class="fas fa-search search-icon"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'search-bar'
}
</script>

<style scoped lang="scss">
  header {
    border-bottom: 1px solid #CFCFCF;
    padding: 11px 20px;
  }

  .search-input-holder {
    position: relative;
  }

  .search-icon {
    color: #3E4543;
    left: 10px;
    position: absolute;
    top: 10px;
  }

  .search-input {
    background-color: #F4F4F4;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #3E4543;
    font-size: 14px;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    max-width: 540px;
    outline: 0;
    padding: 10px 20px 10px 35px;
    width: 100%;

    &::placeholder {
      color: #9B9B9B;
    }
  }

  .search-input:placeholder-shown ~ .search-icon {
    color: #9B9B9B;
  }
</style>
