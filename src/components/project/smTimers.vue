<template>
  <div class="sm-timers">
    <sm-timer
      class="sm-timers__item"
      :class="{ 'sm-timers__item--disabled': activeUser === 2 }"
      :total-second="defaultSecond"
      :passed-second="passedSecond__user1"
      :remainder-second="remainderSecond__user1"
      :active="activeUser === 2"
    />
    <sm-timer
      class="sm-timers__item"
      :class="{ 'sm-timers__item--disabled': activeUser === 1 }"
      :total-second="defaultSecond"
      :passed-second="passedSecond__user2"
      :remainder-second="remainderSecond__user2"
      :active="activeUser === 1"
    />
  </div>
</template>

<script>
// component
import SmTimer from '@/components/project/smTimer'

// use
import { useTimer } from '@/services/state/timer.ts'
import { useUser } from '@/services/state/user.ts'

// const
const {
  defaultSecond,
  passedSecond__user1,
  remainderSecond__user1,
  passedSecond__user2,
  remainderSecond__user2,
} = useTimer()

const { activeUser } = useUser()

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

      activeUser
    }
  }
}
</script>

<style lang="scss">
  .sm-timers{
    display: flex;
    flex-direction: row;
    transform: scale(1);

    &__item {
      &--disabled {
        opacity: .33;
        transform: scale(.9);
      }
    }

    & > .sm-timer {
      margin: 0 40px;
    }
  }
</style>
