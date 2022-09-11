import { ref, readonly, computed, watch } from 'vue'

// @ts-ignore
import { useUser } from './user.ts'
// @ts-ignore
import { useRound } from './round.ts'

// use
const { activeUser, methodsUser } = useUser()
const { play, methodsRound } = useRound()

//ref
const defaultSecond = ref(300) // сколько секунд идет раунд
const timerOn = ref(false) // вкл выкл таймер
const passedSecond__user1 = ref(0) // сколько секунд прошло
const passedSecond__user2 = ref(0) // сколько секунд прошло

let idTimer = null

const toggleTimerOn = () => timerOn.value = !timerOn.value

const restore = () => {
  passedSecond__user1.value = 0
  passedSecond__user2.value = 0
  timerOn.value = false
  clearTimeout(idTimer)
}

function runTimer () {
  idTimer = setTimeout(() => {
    const passedSecond = activeUser.value === 1 ? passedSecond__user1 : passedSecond__user2
    passedSecond.value++
    if (defaultSecond.value !== passedSecond.value) {
      runTimer()
    } else {
      methodsUser.setActiveUser(activeUser.value === 1 ? 2 : 1)
      methodsRound.setWinner(activeUser.value)
      methodsRound.setShowRoundEnd(true)
      methodsRound.nextRound()

      restore()
    }
  }, 1000)
}

watch(timerOn, (current) => {
  play.value = true
  if (current) {
    runTimer()
  } else {
    clearTimeout(idTimer)
  }
})

export const useTimer = () => {
  return {
    defaultSecond,

    passedSecond__user1,
    passedSecond__user2,

    remainderSecond__user1: computed(() => defaultSecond.value - passedSecond__user1.value ),
    remainderSecond__user2: computed(() => defaultSecond.value - passedSecond__user2.value ),

    methodsTimer: readonly({
      // setDefaultSecond,
      toggleTimerOn
    })
  }
}
