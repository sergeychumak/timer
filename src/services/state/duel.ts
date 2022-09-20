import { ref, readonly } from 'vue'

// 10 - Знакомство
// 20 - Кидаем кости
// 30 - Играем
const duelStep = ref(10)

export const useDuel = () => {
  return {
    duelStep,

    methodsDuel: readonly({
      setDuelStep: (newValue) => duelStep.value = newValue,
    })
  }
}
