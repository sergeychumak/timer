import { ref, readonly } from 'vue'

const isOn = ref(false)

export const useDuel = () => {
  return {
    isOn,

    methodsDuel: readonly({
      setIsOn: (newValue) => isOn.value = newValue,
    })
  }
}
