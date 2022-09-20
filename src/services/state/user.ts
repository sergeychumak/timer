import { ref, readonly } from 'vue'

//ref
const activeUser = ref(1) // user1 = 1 or user2 = 2

const opponent1 = ref('111')
const opponent2 = ref('222')

const setActiveUser = (newValue) => activeUser.value = newValue
const getRandomActiveUser = () => setActiveUser(Math.floor(Math.random() * 2) + 1)

export const useUser = () => {
  return {
    activeUser,
    opponent1,
    opponent2,

    methodsUser: readonly({
      setActiveUser,
      getRandomActiveUser
    })
  }
}
