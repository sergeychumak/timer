<template>
  <div class="app">
    <div class="app__wrap">
      <div class="app__timer app__timer-user1" :class="{'app__timer--disabled' : activeUser !== 1}">
        <timer
          :total-second="defaultSecond"
          :passed-second="passedSecond__user1"
          :remainder-second="remainderSecond__user1"
          :active="timerOn && activeUser === 1"
        />
      </div>
      <div class="app__timer app__timer-user2" :class="{'app__timer--disabled' : activeUser !== 2}">
        <timer
          :total-second="defaultSecond"
          :passed-second="passedSecond__user2"
          :remainder-second="remainderSecond__user2"
          :active="timerOn && activeUser === 2"
        />
      </div>
    </div>
    <div class="app__userSelectWrap" @click="toggleActiveUser">
      <span>Активен участник #{{activeUser}}</span>
    </div>
    <div
        class="app__userSelectCircle"
        :class="{'app__userSelectCircle--right': activeUser === 2}"
        @click="toggleActiveUser"
    />
  </div>
</template>

<script>
import Timer from '@/components/project/timer'

// use
import { useOptions } from '@/services/state/options.ts'
import { useUser } from '@/services/state/user.ts'

// const
const { defaultSecond, timerOn } = useOptions()
const {
  activeUser,
  passedSecond__user1,
  passedSecond__user2,
  remainderSecond__user1,
  remainderSecond__user2,
  methodsUser
} = useUser()

export default {
  name: 'App',
  components: {
    Timer
  },
  setup () {
    return {
      defaultSecond,
      timerOn,

      activeUser,
      passedSecond__user1,
      remainderSecond__user1,
      passedSecond__user2,
      remainderSecond__user2,
      toggleActiveUser: () => {
        methodsUser.setActiveUser()
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.app {
  height: 100%;

  &__userSelectWrap {
    position: absolute;
    width: 300px;
    height: 50px;
    background-color: #589f51;
    color: white;
    top: 10%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;

    & > span {
      font-weight: bold;
      padding: 13px;
      display: block;
    }

    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background-color: #589f51;
      position: absolute;
      top: 0;
      left: -25px;
      border-radius: 50%;
    }
    &:before {
      content: '';
      width: 50px;
      height: 50px;
      background-color: #589f51;
      position: absolute;
      top: 0;
      right: -25px;
      border-radius: 50%;
    }
  }

  &__userSelectCircle {
    transition: all 250ms linear 0s;
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: white;
    top: calc(10% + 5px);
    left: -300px;
    right: 0;
    margin: auto;
    border-radius: 50%;
    &--right {
      left: 300px;
    }
  }

  &__wrap {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
      flex-basis: 50%;
      display: flex;
    }
  }

  &__timer {
    transition: all 200ms linear 0s;
    height: 100%;
    align-items: center;

    &-user1 {
      justify-content: end;
      padding-right: 20px;
    }

    &-user2 {
      justify-content: start;
      padding-left: 20px;
    }

    &--disabled {
      opacity: 0.3;
      background-color: #5b9847;
    }
  }
}
</style>
