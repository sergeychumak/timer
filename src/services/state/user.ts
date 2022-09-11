import { ref, readonly } from 'vue'

//ref
const activeUser = ref(1) // user1 = 1 or user2 = 2

const setActiveUser = (newValue) => activeUser.value = newValue
const getRandomActiveUser = () => setActiveUser(Math.floor(Math.random() * 2) + 1)

export const useUser = () => {
  return {
    activeUser,

    methodsUser: readonly({
      setActiveUser,
      getRandomActiveUser
    })
  }
}
