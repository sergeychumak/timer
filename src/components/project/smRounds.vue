<template>
  <div class="sm-rounds">
    <app-round-item
        v-for="item in countRounds"
        :key="item"
        :class="{ ...classObject, 'sm-rounds--active': activeRound === item}"
    >
      Раунд {{ item }}
    </app-round-item>
    <template v-if="!play">
      <span class="icon" @click="deleteRound" v-if="countRounds > 1">
        <i class="mdi mdi-24px mdi-close"></i>
      </span>
      <span class="icon" @click="addRound">
        <i class="mdi mdi-24px mdi-plus"></i>
      </span>
    </template>
  </div>
</template>

<script>
// components
import AppRoundItem from '@/components/base/app-round-item'

// use
import { useRound } from '@/services/state/round.ts'

// const
const { countRounds, play, activeRound, methodsRound } = useRound()

export default {
  name: 'sm-rounds',
  components: {
    AppRoundItem
  },
  setup () {
    return {
      countRounds,
      play,
      activeRound,
      addRound: methodsRound.addRound,
      deleteRound: methodsRound.deleteRound
    }
  },
  computed: {
    classObject () {
      return {
        'sm-rounds--disabled': play.value
      }
    }
  }
}
</script>

<style lang="scss">
  .sm-rounds {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &--disabled {
      opacity: .5;
    }

    &--active {
      opacity: 1;
    }

    & > .app-round-item {
      margin: 0 5px;
    }

    & > span {
      cursor: pointer;
    }
  }
</style>
