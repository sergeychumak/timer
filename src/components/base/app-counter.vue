<template>
  <div class="app-counter">
    {{ minuteString }}:{{ secondString }}
  </div>
</template>

<script>
import { MINUTE_TO_SECONDS, MAX_MINUTE } from '@/services/constants.ts'

export default {
  name: 'app-counter',
  props: {
    second: {
      type: Number,
      default: 0
    }
  },
  computed: {
    minute () {
      return this.second < 0 ? 0 : Math.floor(this.second / MINUTE_TO_SECONDS)
    },
    remainderSecond () {
      if ( this.minute >= 0 ) {
        const res = this.second - this.minute * MINUTE_TO_SECONDS
        return res < 0 ? 0 : res
      } else {
        return 0
      }
    },
    minuteString () {
      return this.minute > MAX_MINUTE ? '99+' : `${this.minute}`.padStart(2, '0')
    },
    secondString () {
      return `${this.remainderSecond}`.padStart(2, '0')
    }
  }
}
</script>

<style>
  .app-counter {

  }
</style>
