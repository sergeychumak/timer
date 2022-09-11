<template>
  <div class="app-round-item box-shadow">
    <slot></slot>
<!--    <span class="icon">-->
<!--      <i class="mdi mdi-14px mdi-close"></i>-->
<!--    </span>-->
  </div>
</template>

<script>
export default {
  name: 'app-round-item',
}
</script>

<style lang="scss">
  .app-round-item {
    background-color: white;
    //width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    //color: white;
    position: relative;
    padding: 0 20px;

    //& > span.icon {
    //  position: absolute;
    //  bottom: 0;
    //  color: white;
    //  background-color: red;
    //  width: 17px;
    //  height: 17px;
    //  border-radius: 50%;
    //  display: flex;
    //  align-items: center;
    //  justify-content: center;
    //  margin-bottom: 22px;
    //}
  }
</style>
