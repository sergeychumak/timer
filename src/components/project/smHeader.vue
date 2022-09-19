<template>
  <div class="sm-header box-shadow">
    <app-logo/>
    <icon-reload/>
  </div>
</template>

<script>
// components
import AppLogo from '@/components/base/app-logo'
import IconReload from '@/components/project/icons/icon-reload'

export default {
  name: 'sm-header',
  components: {
    AppLogo,
    IconReload
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
  }
</style>
