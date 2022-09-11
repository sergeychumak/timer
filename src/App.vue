<template>
  <div class="app">
    <sm-header/>
<!--    <template v-if="countRounds !== winner.length">-->
<!--      <template v-if="!showRoundEnd">-->
<!--        <sm-dice/>-->
<!--        <sm-timers/>-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <div class="app__round-end">-->
<!--          <div>Раунд №{{ activeRound - 1 }} завершен</div>-->
<!--          <div>Победила "Команда {{ activeUser }}"</div>-->
<!--          <div @click="nextRound">играть раунд №{{ activeRound }}</div>-->
<!--        </div>-->
<!--      </template>-->
<!--    </template>-->
<!--    <template v-else>-->
<!--      <div class="app__game-end">-->
<!--        <div>Поздравляем</div>-->
<!--        <div>игра закончена</div>-->

<!--        <div-->
<!--            v-for="item in countRounds"-->
<!--            :key="item"-->
<!--            class="app__game-end-line"-->
<!--        >-->
<!--          Раунд {{ item }}: Выиграла команда №{{ winner[item-1] }}-->
<!--        </div>-->

<!--      </div>-->
<!--    </template>-->
<!--    <div class="app__bg" :class="classObject"></div>-->
  </div>
</template>

<script>
import { computed } from 'vue'

import SmHeader from '@/components/project/smHeader'
// import SmDice from '@/components/project/smDice'
// import SmTimers from '@/components/project/smTimers'

// use
import { useUser } from '@/services/state/user.ts'
import { useRound } from '@/services/state/round.ts'

// const
const { activeUser } = useUser()
const { showRoundEnd, activeRound, countRounds, winner, methodsRound } = useRound()

export default {
  name: 'App',
  components: {
    SmHeader,
  //   SmDice,
  //   SmTimers,
  },
  setup () {
    return {
      showRoundEnd,
      activeRound,
      countRounds,
      winner,
      activeUser,
      classObject: computed(() => activeUser.value === 1 ? 'bg-gradient-b' : 'bg-gradient-a' ),
      nextRound: () => {

        methodsRound.setShowRoundEnd(false)
      }
    }
  }
}
</script>

<style lang="scss">
.app {
  min-width: 1024px;
  background-color: cornflowerblue;
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
    opacity: .33;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__round-end {
    text-align: center;
    font-size: 44px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px #9a9a9a;

    & > div:last-child {
      color: #555555;
      text-shadow: none;
      font-size: 24px;
      padding-top: 40px;
      cursor: pointer;
    }
  }

  &__game-end {
    text-align: center;
    font-size: 44px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px #9a9a9a;
  }

  &__game-end-line {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px #9a9a9a;
    padding-top: 20px;
  }
}
</style>
