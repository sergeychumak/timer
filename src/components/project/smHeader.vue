<template>
  <div class="sm-header box-shadow">
    <app-logo/>
<!--    <sm-rounds/>-->
    <span class="icon" @click="getRandomActiveUser">
      <i class="mdi mdi-24px" :class="diceIcon"></i>
    </span>
    <span class="icon">
      <i class="mdi mdi-reload mdi-24px"></i>
    </span>
  </div>
</template>

<script>
// components
import AppLogo from '@/components/base/app-logo'
import SmRounds from '@/components/project/smRounds'

// use
import { useUser } from '@/services/state/user.ts'
import { useRound } from '@/services/state/round.ts'

// const
const {
  activeUser,
  methodsUser
} = useUser()

const { countRounds } = useRound()

export default {
  name: 'sm-header',
  components: {
    AppLogo,
    SmRounds
  },
  setup () {
    return {
      activeUser,
      countRounds
    }
  },
  data () {
    return {
      counter: 1,
      runIncCounter: false
    }
  },
  computed: {
    diceIcon () {
      return `mdi-dice-${this.counter}-outline`
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
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss">
  .sm-header {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 15px 20px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      margin-left: 15px;
      cursor: pointer;
    }
  }
</style>
