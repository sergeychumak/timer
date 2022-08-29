<template>
  <div class="sm-dice bg-gradient-b box-shadow">
    Активен участник #1
  </div>
</template>

<script>

export default {
  name: 'sm-dice',
}
</script>

<style lang="scss">
  .sm-dice {
    width: 300px;
    background-color: rgba(255, 255, 255, 0.4);
    margin: auto;
    border-radius: 10px;
    padding: 8px 10px 10px 10px;
    color: white;
    font-weight: bold;
    position: relative;
    text-align: center;

    &:after {
      content: "";
      width: 10px;
      height: 10px;
      background-color: white;
      position: absolute;
      top: 13px;
      left: 15px;
      border-radius: 50%;
    }
  }
</style>
