<template>
  <div class="app">
    <sm-header/>
    <sm-dice class="box-shadow"/>
    <div class="app__timers"></div>
    <timer
      :total-second="11"
      :passed-second="passedSecond__user1"
      :remainder-second="remainderSecond__user1"
      :active="timerOn && activeUser === 1"
    />
    <div class="app__bg bg-gradient-a"></div>
  </div>
</template>

<script>
import SmHeader from '@/components/project/smHeader'
import SmDice from '@/components/project/smDice'
import Timer from '@/components/project/timer'

// use
// import { useOptions } from '@/services/state/options.ts'
// import { useUser } from '@/services/state/user.ts'

// const
// const { defaultSecond, timerOn } = useOptions()
// const {
//   activeUser,
//   passedSecond__user1,
//   passedSecond__user2,
//   remainderSecond__user1,
//   remainderSecond__user2,
//   methodsUser
// } = useUser()

export default {
  name: 'App',
  components: {
    SmHeader,
    SmDice,
    Timer
  },
  // setup () {
  //   return {
  //     defaultSecond,
  //     timerOn,
  //
  //     activeUser,
  //     passedSecond__user1,
  //     remainderSecond__user1,
  //     passedSecond__user2,
  //     remainderSecond__user2,
  //     toggleActiveUser: () => {
  //       methodsUser.setActiveUser()
  //     }
  //   }
  // }
}
</script>

<style lang="scss">

.app {
  min-width: 1024px;
  overflow: hidden;

  & > .sm-header {}

  & > .sm-dice {
    text-align: center;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .2;
    top: 0;
    left: 0;
    z-index: -1;
  }
}


//.app {
//  height: 100%;
//
//  &__userSelectWrap {
//    position: absolute;
//    width: 300px;
//    height: 50px;
//    background-color: #589f51;
//    color: white;
//    top: 10%;
//    left: 0;
//    right: 0;
//    margin: auto;
//    text-align: center;
//
//    & > span {
//      font-weight: bold;
//      padding: 13px;
//      display: block;
//    }
//
//    &:after {
//      content: '';
//      width: 50px;
//      height: 50px;
//      background-color: #589f51;
//      position: absolute;
//      top: 0;
//      left: -25px;
//      border-radius: 50%;
//    }
//    &:before {
//      content: '';
//      width: 50px;
//      height: 50px;
//      background-color: #589f51;
//      position: absolute;
//      top: 0;
//      right: -25px;
//      border-radius: 50%;
//    }
//  }
//
//  &__userSelectCircle {
//    transition: all 250ms linear 0s;
//    position: absolute;
//    width: 40px;
//    height: 40px;
//    background-color: white;
//    top: calc(10% + 5px);
//    left: -300px;
//    right: 0;
//    margin: auto;
//    border-radius: 50%;
//    &--right {
//      left: 300px;
//    }
//  }
//
//  &__wrap {
//    height: 100%;
//    display: flex;
//    flex-direction: row;
//    align-items: center;
//
//    & > div {
//      flex-basis: 50%;
//      display: flex;
//    }
//  }
//
//  &__timer {
//    transition: all 200ms linear 0s;
//    height: 100%;
//    align-items: center;
//
//    &-user1 {
//      justify-content: end;
//      padding-right: 20px;
//    }
//
//    &-user2 {
//      justify-content: start;
//      padding-left: 20px;
//    }
//
//    &--disabled {
//      opacity: 0.3;
//      background-color: #5b9847;
//    }
//  }
//}
</style>
