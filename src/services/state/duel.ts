import { ref, readonly } from 'vue'

// 0 - Знакомство
// 1 - Кидаем кости
// 2 - Играем
const duelStep = ref(0)

const isOn = ref(false)
const opponent1 = ref('')
const opponent2 = ref('')

export const useDuel = () => {
  return {
    duelStep,
    isOn,
    opponent1,
    opponent2,

    methodsDuel: readonly({
      setIsOn: (newValue) => isOn.value = newValue,
    })
  }
}
