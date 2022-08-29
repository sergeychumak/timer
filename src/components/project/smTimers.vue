<template>
  <div class="sm-timers">
    <sm-timer
      :total-second="defaultSecond"
      :passed-second="passedSecond__user1"
      :remainder-second="remainderSecond__user1"
    />
    <sm-timer
      :total-second="defaultSecond"
      :passed-second="passedSecond__user2"
      :remainder-second="remainderSecond__user2"
    />
  </div>
</template>

<script>
// component
import SmTimer from '@/components/project/smTimer'

// use
import { useTimer } from '@/services/state/timer.ts'

// const
const {
  defaultSecond,
  passedSecond__user1,
  remainderSecond__user1,
  passedSecond__user2,
  remainderSecond__user2,
} = useTimer()

export default {
  name: 'sm-timers',
  components: {
    SmTimer
  },
  setup () {
    return {
      defaultSecond,
      passedSecond__user1,
      remainderSecond__user1,
      passedSecond__user2,
      remainderSecond__user2,
    }
  }
}
</script>

<style lang="scss">
  .sm-timers{
    display: flex;
    flex-direction: row;

    & > .sm-timer {
      margin: 0 40px;
    }
  }
</style>
