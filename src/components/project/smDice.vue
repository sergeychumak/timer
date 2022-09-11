<template>
  <div class="sm-dice box-shadow noselect" :class="classObject" @click="yourTurn">
    Ход команды №{{ activeUser }}
  </div>
</template>

<script>
import { computed } from 'vue'

// use
import { useUser } from '@/services/state/user.ts'

// const
const { activeUser, methodsUser } = useUser()

export default {
  name: 'sm-dice',
  setup () {
    return {
      activeUser,
      classObject: computed(() => {
        return {
          'bg-gradient-b': activeUser.value === 1,
          'bg-gradient-a': activeUser.value === 2,
          'sm-dice__right': activeUser.value === 2,
        }
      }),
      yourTurn: () => {
        methodsUser.setActiveUser( activeUser.value === 1 ? 2 : 1)
      }
    }
  }
}
</script>

<style lang="scss">
  .sm-dice {
    width: 300px;
    margin: auto;
    border-radius: 10px;
    padding: 8px 10px 10px 10px;
    color: white;
    font-weight: bold;
    position: relative;
    text-align: center;
    cursor: pointer;

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

    &__right {
      &:after {
        left: auto;
        right: 15px;
      }
    }
  }
</style>
