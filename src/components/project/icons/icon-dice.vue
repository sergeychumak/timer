<template>
  <span class="icon-dice icon" @click="getRandomActiveUser">
    <i class="mdi mdi-48px" :class="diceIcon"></i>
  </span>
</template>

<script>
// use
import { useUser } from '@/services/state/user.ts'

// const
const {
  // activeUser,
  methodsUser
} = useUser()

export default {
  name: 'icon-dice',
  computed: {
    diceIcon () {
      return `mdi-dice-${this.counter}-outline`
    }
  },
  data () {
    return {
      counter: 1,
      runIncCounter: false
    }
  },
  methods: {
    getRandomActiveUser () {
      if (this.runIncCounter === false) {
        this.runIncCounter = true
        this.runIncrementCounter()
      }
    },
    runIncrementCounter (index = 0) {
      setTimeout(() => {
        let counter = this.counter + 1
        if (counter > 6) {
          counter = 1
        }
        this.counter = counter
        index++
        if (index < 24) {
          this.runIncrementCounter(index)
        } else {
          this.counter = 1
          this.runIncCounter = false
          methodsUser.getRandomActiveUser()
          this.$emit('action-next')
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss">
  .icon-dice {

  }
</style>
