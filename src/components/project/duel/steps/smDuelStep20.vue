<template>
  <div class="sm-duel-step-20">
    <h1>Отлично</h1>
    <h2>Давайте определим чей ход</h2>
    <h6>Нажмите и мы кинем кости</h6>
    <icon-dice @action-next="nextDuelStep"></icon-dice>
  </div>
</template>

<script>
import IconDice from '@/components/project/icons/icon-dice'

import { useDuel } from '@/services/state/duel.ts'

const { methodsDuel } = useDuel()

export default {
  name: 'sm-duel-step-20',
  components: {
    IconDice
  },
  methods: {
    nextDuelStep () {
      methodsDuel.setDuelStep(30)
    }
  }
}
</script>

<style lang="scss">
  .sm-duel-step-20 {

  }
</style>
