import { ref, readonly } from 'vue'

const defaultSecond = ref(10)
const timerOn = ref(false)

const setTimerOn = (newValue) => { timerOn.value = newValue }

export const useOptions = () => {
  return {
    defaultSecond,
    timerOn,
    methodsOptions: readonly({
      setTimerOn
    })
  }
}
