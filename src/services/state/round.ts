import { ref, readonly } from 'vue'

//ref
const countRounds = ref(1)
const activeRound = ref(1)
const play = ref(false) // игра началась
const winner = ref([])
const showRoundEnd = ref(false)

export const useRound = () => {
  return {
    countRounds,
    activeRound,
    play,
    winner,
    showRoundEnd,

    methodsRound: readonly({
      addRound: () => countRounds.value++,
      deleteRound: () => countRounds.value--,
      setPlay: (newValue) => play.value = newValue,
      setWinner: (newValue) => winner.value.push(newValue),
      nextRound: () => activeRound.value++,
      setShowRoundEnd: (newValue) => showRoundEnd.value = newValue,
    })
  }
}
