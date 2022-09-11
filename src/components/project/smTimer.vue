<template>
  <app-counter-view
    class="sm-timer timer"
    :total-second="totalSecond"
    :passed-second="passedSecond"
  >
    <app-counter
      class="timer__counter"
      :second="remainderSecond"
    />
    <template v-slot:buttons v-if="!active">
      <app-button :class="classObject" @click="timerToggle" :active="active"/>
    </template>
  </app-counter-view>
</template>

<script>
import AppCounterView from '@/components/base/app-counter-view'
import AppCounter from '@/components/base/app-counter'
import AppButton from '@/components/base/app-button'

// use
import { useTimer } from '@/services/state/timer.ts'
import {useUser} from "@/services/state/user.ts";
import {computed} from "vue";


// const
const { methodsTimer } = useTimer()
const { activeUser } = useUser()

export default {
  name: 'sm-timer',
  setup () {
    return {
      // activeUser,
      timerToggle: () => {
        methodsTimer.toggleTimerOn()
      },
      classObject: computed(() => {
        return {
          'bg-gradient-b': activeUser.value === 1,
          'bg-gradient-a': activeUser.value === 2,
        }
      }),
    }
  },
  components: {
    AppCounterView,
    AppCounter,
    AppButton
  },
  props: {
    totalSecond: {
      type: Number,
      default: 0
    },
    passedSecond: {
      type: Number,
      default: 0
    },
    remainderSecond: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.timer {
  width: 300px;
  height: 300px;

  &__counter {
    font-size: 46px;
    font-weight: bold;
  }
}
</style>
