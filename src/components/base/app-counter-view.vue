<template>
  <div class="app-counter-view">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 218 218"
      preserveAspectRatio="xMidYMid meet"
    >
<!--      <linearGradient id="gradient">-->
<!--        <stop offset="0" stop-color="gold"></stop>-->
<!--        <stop offset="30%" stop-color="red"></stop>-->
<!--        <stop offset="60%" stop-color="darkviolet"></stop>-->
<!--        <stop offset="100%" stop-color="deepskyblue"></stop>-->
<!--      </linearGradient>-->

      <circle
        class="app-counter-view__bg"
        :cx="CX"
        :cy="CY"
        :r="R"
        fill="url(#gradient)"
        stroke="url(#gradient)"
      />
      <circle
        class="app-counter-view__line"
        :class="classExtendLine"
        :cx="CX"
        :cy="CY"
        :r="R"
        :stroke-dashoffset = "dashoffsetLine"
        :stroke-dasharray = "DASHARRAY"
      />
    </svg>
    <div class="app-counter-view__content">
      <slot></slot>
    </div>
    <div class="app-counter-view__buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
import { CX, CY, R, DASHARRAY, DASHOFFSET } from '@/services/constants.ts'

export default {
  name: 'app-counter-view',
  setup () {
    return { CX, CY, R, DASHARRAY, DASHOFFSET }
  },
  props: {
    totalSecond: {
      type: Number,
      require: true
    },
    passedSecond: {
      type: Number,
      require: true
    }
  },
  computed: {
    step () {
      return (DASHARRAY - DASHOFFSET) / this.totalSecond
    },
    dashoffsetLine () {
      return DASHOFFSET + this.step * this.passedSecond
    },
    p () {
      return this.passedSecond * 100 / this.totalSecond
    },
    classExtendLine () {
      return {
        'app-counter-view__line--p-50': this.p >= 50 && this.p < 60,
        'app-counter-view__line--p-60': this.p >= 60 && this.p < 70,
        'app-counter-view__line--p-70': this.p >= 70 && this.p < 80,
        'app-counter-view__line--p-80': this.p >= 80 && this.p < 90,
        'app-counter-view__line--p-90': this.p >= 90,
      }
    }
  }
}
</script>

<style lang="scss">
  .app-counter-view {
    padding: 10px;
    border-radius: 50%;
    transition: all 200ms linear 0s;
    position: relative;

    svg {
      transform: rotate( -225deg );
    }

    &__bg {
      stroke-width: 14px;
      transition: all 200ms linear 0s;
      opacity: .1;
      transform-origin: center;
    }

    &__line {
      stroke: white;
      fill: transparent;
      stroke-width: 4px;
      stroke-linecap: round;
      transition: all 200ms linear 0s;
      //opacity: .5;

      &--p-50 { stroke: blue; opacity: .6;}
      &--p-60 { stroke: blue; opacity: .7; }
      &--p-70 { stroke: blue; opacity: .8; }
      &--p-80 { stroke: blue; opacity: .9; }
      &--p-90 { stroke: red; opacity: 1; }
    }

    &__content {
      position: absolute;
      background-color: white;
      top: 10%;
      width: 80%;
      height: 80%;
      border-radius: 50%;
      left: 10%;

      box-shadow: 0 1px 1px rgba(0,0,0,0.02),
      0 2px 2px rgba(0,0,0,0.02),
      0 4px 4px rgba(0,0,0,0.02),
      0 8px 8px rgba(0,0,0,0.02),
      0 16px 16px rgba(0,0,0,0.02),
      0 32px 32px rgba(0,0,0,0.02);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__buttons {
      position: absolute;
      bottom: 25%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
    }
  }
</style>
