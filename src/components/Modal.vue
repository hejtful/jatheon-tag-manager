<template>
  <div class="modal-background" :class="{ visible: isModalVisible }">
    <div class="modal">
      <div class="modal-header">
        <span>DELETE TAG</span>
        <button class="close-button" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <img src="../assets/img-delete.png">
        <p>
          Are you sure you want to
          <b>delete {{ forDeletion.length > 1 ? 'these tags' : 'this tag' }}</b>?
        </p>
      </div>

      <div class="modal-footer">
        <button class="button cancel-button" @click="closeModal">
          Cancel
        </button>
        <button class="button delete-button" @click="deleteRows">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'modal',

  computed: mapState([
    'forDeletion',
    'isModalVisible'
  ]),

  methods: mapMutations([
    'closeModal',
    'deleteRows'
  ])
}
</script>

<style scoped lang="scss">
  .modal-background {
    background-color: rgba(50, 50, 50, .6);
    bottom: 0;
    display: none;
    height: 100vh;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
  }

  .visible {
    display: block;
  }

  .modal {
    background-color: #FFF;
    left: 50vw;
    position: absolute;
    top: 50vh;
    transform: translateY(-50%) translateX(-50%);
    width: 500px;
  }

  .modal-header {
    align-items: center;
    background-color: #F4F4F4;
    color: #3E4543;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 20px;
  }

  .close-button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    outline: none;
  }

  .modal-body {
    border-bottom: 1px solid #CFCFCF;
    border-top: 1px solid #CFCFCF;
    padding: 50px 40px 60px;
    text-align: center;
  }

  p {
    color: #3E4543;
    font-size: 14px;
    line-height: 24px;
    margin-top: 20px;
  }

  .modal-footer {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .cancel-button {
    background-color: transparent;
    color: #9B9B9B;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
    margin-right: 20px;
  }

  .delete-button {
    background-color: #CF202E;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    width: 150px;

    &:hover {
      background-color: lighten(#CF202E, 10);
    }

    &:active {
      background-color: darken(#CF202E, 10);
    }
  }
</style>
