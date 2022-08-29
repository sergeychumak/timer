<template>
  <div class="sm-header box-shadow">
    <app-logo/>
    <span class="icon">
      <i class="mdi mdi-reload mdi-24px"></i>
    </span>
    <span class="icon">
      <i class="mdi mdi-dice-2-outline mdi-24px"></i>
    </span>
    <span class="icon">
      <i class="mdi mdi-dice-2-outline mdi-24px"></i>
    </span>
    <span class="icon">
      <i class="mdi mdi-helicopter mdi-24px"></i>
    </span>
  </div>
</template>

<script>
import AppLogo from '@/components/base/app-logo'

export default {
  name: 'sm-header',
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
  .sm-header {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 15px 20px 20px 20px;
    display: flex;
    align-items: center;

    & > .app-logo {
      flex-grow: 1;
    }

    & > span {
      margin-left: 15px;
    }
  }
</style>
