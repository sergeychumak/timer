<template>
  <div class="sm-duel">
    <sm-duel-step-10 v-if = "duelStep === 10"/>
    <sm-duel-step-20 v-else-if = "duelStep === 20"/>
    <sm-duel-step-30 v-else/>
  </div>
</template>

<script>
import SmDuelStep10 from './steps/smDuelStep10'
import SmDuelStep20 from './steps/smDuelStep20'
import SmDuelStep30 from './steps/smDuelStep30'

import { useDuel } from '@/services/state/duel.ts'

const { duelStep } = useDuel()

export default {
  name: 'sm-duel',
  components: {
    SmDuelStep10,
    SmDuelStep20,
    SmDuelStep30
  },
  setup () {
    return {
      duelStep
    }
  }
}
</script>

<style lang="scss">
  .sm-duel {
    text-align: center;
  }
</style>
