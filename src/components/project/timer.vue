<template>
  <app-counter-view
    class="timer"
    :total-second="totalSecond"
    :passed-second="passedSecond"
  >
    <app-counter
      class="timer__counter"
      :second="remainderSecond"
    />
    <template v-slot:buttons>
      <app-button @click="timerToggle" :active="active"/>
    </template>
  </app-counter-view>
</template>

<script>
import AppCounterView from '@/components/base/app-counter-view'
import AppCounter from '@/components/base/app-counter'
import AppButton from '@/components/base/app-button'

// use
import { useOptions } from '@/services/state/options.ts'

// const
const { timerOn, methodsOptions } = useOptions()

export default {
  name: 'timer',
  setup () {
    return {
      timerToggle: () => {
        methodsOptions.setTimerOn(!timerOn.value)
      }
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
