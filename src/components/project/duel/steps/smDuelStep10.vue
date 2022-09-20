<template>
  <div class="sm-duel-step-10">
    <h1>Приветствую Вас в игре <br/>"Я И ТЫ"</h1>
    <h2>Давайте познакомимся</h2>
    <h3>Имя игрока #1</h3>
    <input type="text" v-model="opponent1"/>
    <h3>Имя игрока #2</h3>
    <input type="text" v-model="opponent2"/>
    <br/>
    <br/>
    <button @click="setDuelStep(20)">Начать дуэль</button>
  </div>
</template>

<script>
import { useDuel } from '@/services/state/duel.ts'
import { useUser } from '@/services/state/user.ts'

const { methodsDuel } = useDuel()
const { opponent1, opponent2 } = useUser()

export default {
  name: 'sm-duel-step-10',
  setup () {
    return {
      opponent1,
      opponent2,
      setDuelStep: methodsDuel.setDuelStep
    }
  }
}
</script>

<style lang="scss">
  .sm-duel-step-10 {
    & > input {
      -webkit-appearance: none;
      align-items: center;
      border: 1px solid #dbdbdb;
      display: inline-flex;
      font-size: 1rem;
      height: 2.5em;
      line-height: 1.5;
      position: relative;
      vertical-align: top;

      background-color: #fff;
      border-radius: 0.375em;
      color: #363636;

      box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);

      padding: 0.25rem 0.75rem;

      outline: none;
    }

    & > button {
      background-color: #fff;
      color: #363636;
      cursor: pointer;
      justify-content: center;
      text-align: center;
      white-space: nowrap;

      align-items: center;
      border: 1px solid #dbdbdb;
      border-radius: .375em;
      box-shadow: none;
      display: inline-flex;
      font-size: 1rem;
      height: 2.5em;
      line-height: 1.5;
      padding-bottom: calc(0.5em - 1px);
      padding-left: calc(0.75em - 1px);
      padding-right: calc(0.75em - 1px);
      padding-top: calc(0.5em - 1px);
      position: relative;
      vertical-align: top;
    }
  }
</style>
