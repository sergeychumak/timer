<template>
  <div class="app">
    <sm-header/>
    <sm-dice/>
    <sm-timers/>
    <div class="app__bg bg-gradient-a"></div>
  </div>
</template>

<script>
import SmHeader from '@/components/project/smHeader'
import SmDice from '@/components/project/smDice'
import SmTimers from '@/components/project/smTimers'

// use
import { useTimer } from '@/services/state/timer.ts'
// import { useOptions } from '@/services/state/options.ts'
// import { useUser } from '@/services/state/user.ts'

// const
const {
  defaultSecond,
  passedSecond__user1,
  remainderSecond__user1,
  passedSecond__user2,
  remainderSecond__user2,
} = useTimer()
// const { defaultSecond, timerOn } = useOptions()
// const {
//   activeUser,
//   passedSecond__user1,
//   passedSecond__user2,
//   remainderSecond__user1,
//   remainderSecond__user2,
//   methodsUser
// } = useUser()

export default {
  name: 'App',
  components: {
    SmHeader,
    SmDice,
    SmTimers,
  },
  setup () {
    return {
      defaultSecond,
      passedSecond__user1,
      remainderSecond__user1,
      passedSecond__user2,
      remainderSecond__user2,
  //     timerOn,
  //
  //     activeUser,
  //     passedSecond__user1,
  //     remainderSecond__user1,
  //     passedSecond__user2,
  //     remainderSecond__user2,
  //     toggleActiveUser: () => {
  //       methodsUser.setActiveUser()
    }
  }
}
</script>

<style lang="scss">

.app {
  min-width: 1024px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > .sm-header {
    margin-bottom: 40px;
  }
  & > .sm-dice {
    margin-bottom: 30px;
  }
  & > .sm-timers {
    flex-grow: 1;
    justify-content: center;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .2;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
