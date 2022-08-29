import { ref, readonly, computed, watch } from 'vue'
// @ts-ignore
// import { useOptions } from './options.ts'

// use
// const { defaultSecond, timerOn } = useOptions()

//ref
const defaultSecond = ref(60) // сколько секунд идет раунд
const timerOn = ref(false) // вкл выкл таймер
const passedSecond__user1 = ref(0) // сколько секунд прошло
const passedSecond__user2 = ref(0) // сколько секунд прошло

let idTimer = null

// const setDefaultSecond = (newValue) => defaultSecond.value = newValue
// const toggleTimerOn = () => timerOn.value = !timerOn.value


function runTimer () {
  // idTimer = setTimeout(() => {
  //   const passedSecond = activeUser.value === 1 ? passedSecond__user1 : passedSecond__user2
  //   passedSecond.value++
  //   if (defaultSecond.value !== passedSecond.value) {
  //     runTimer()
  //   } else {
  //     setActiveUser()
  //   }
  // }, 1000)
}

watch(timerOn, (current) => {
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
      // toggleTimerOn
    })
  }
}
