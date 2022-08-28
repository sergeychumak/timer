<template>
  <div class="app-logo">
    Я<span class="bg-gradient-b">IT</span>Ы
  </div>
</template>

<script>

export default {
  name: 'app-logo'
}
</script>

<style lang="scss">
  .app-logo {
    font-size: 22px;
    font-weight: bold;

    & > span {
      font-size: 18px;
      padding: 10px;
      color: white;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morphing 5s infinite;
      overflow: hidden;
    }
  }
</style>
