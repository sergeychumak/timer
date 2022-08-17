<template>
  <div class="app-button" :class="{'app-button--active': active}">
    <template v-if="active">
      <span class="icon">
        <i class="mdi mdi-stop mdi-24px"></i>
      </span>
      Протест
    </template>
    <template v-else>
      <span class="icon">
        <i class="mdi mdi-play mdi-24px"></i>
      </span>
      Запуск
    </template>
  </div>
</template>

<script>
export default {
  name: 'app-button',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .app-button {
    padding: 6px 20px;
    background-color: green;
    border-radius: 6px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    cursor: pointer;

    box-shadow: 0 1px 1px rgba(0,0,0,0.02),
    0 2px 2px rgba(0,0,0,0.02),
    0 4px 4px rgba(0,0,0,0.02),
    0 8px 8px rgba(0,0,0,0.02),
    0 16px 16px rgba(0,0,0,0.02),
    0 32px 32px rgba(0,0,0,0.02);

    transition: all 200ms linear 0s;
    opacity: .5;

    & > span {
      margin-right: 10px;
      margin-left: -6px;
      margin-top: 1px;
    }

    &:hover {
      opacity: .75;
    }

    &--active {
      background-color: red;
      opacity: .75;
    }
  }
</style>
