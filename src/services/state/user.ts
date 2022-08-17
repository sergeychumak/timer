import { ref, readonly, computed, watch } from 'vue'
// @ts-ignore
import { useOptions } from './options.ts'

// use
const { defaultSecond, timerOn } = useOptions()

//ref
const activeUser = ref(1) // user1 = 1 or user2 = 2
const passedSecond__user1 = ref(0)
const passedSecond__user2 = ref(0)

let idTimer = null

function runTimer () {
  idTimer = setTimeout(() => {
    const passedSecond = activeUser.value === 1 ? passedSecond__user1 : passedSecond__user2
    passedSecond.value++
    if (defaultSecond.value !== passedSecond.value) {
      runTimer()
    } else {
      setActiveUser()
    }
  }, 1000)
}

watch(timerOn, (current) => {
  if (current) {
    runTimer()
  } else {
    clearTimeout(idTimer)
  }
})

const setActiveUser = () => {
  activeUser.value = activeUser.value === 1 ? 2 : 1
}

export const useUser = () => {
  return {
    activeUser,

    passedSecond__user1,
    remainderSecond__user1: computed(() => {
      return defaultSecond.value - passedSecond__user1.value
    }),

    passedSecond__user2,
    remainderSecond__user2: computed(() => {
      return defaultSecond.value - passedSecond__user2.value
    }),

    methodsUser: readonly({
      setActiveUser
    })
  }
}
