<template>
  <div
    :class="{ 'bg-primary': isPrimary }"
    :style="size"
    class="mx-auto mt-5">

    <svg 
      id="SureVoIP-Spinner"
      viewBox="0 0 300 300">
      <g>
        <path 
          ref="circle_quarter"
          fill="rgb(32, 146, 237)" 
          d="M150.2,18.6c36.3,0,69.1,14.6,92.8,38.5c15.6,15.6,27.3,35.1,33.5,56.9l17.6-6C275.9,45.6,218.3,0,150.1,0
            c0,0-0.1,0-0.1,0v18.6C150,18.6,150.1,18.6,150.2,18.6z"/>
        <path
          ref="circle_full"
          fill="rgb(32, 146, 237)" 
          opacity="0.5"
          d="M276.5,113.9c3.3,11.4,5,23.5,5,36c0,36.4-14.8,69.1-38.5,93c-23.8,23.8-56.6,38.5-92.8,38.5
            c-36.3,0-69.1-14.8-92.8-38.5c-23.8-23.8-38.5-56.6-38.5-93c0-36.3,14.6-69.1,38.5-92.8c23.8-23.8,56.5-38.4,92.6-38.5V0
            C67.1,0.1,0,67.2,0,149.9C0,232.8,67.2,300,150.1,300S300,232.8,300.1,149.9c0-14.6-2.1-28.7-6-42L276.5,113.9z"/>
        <path
          ref="s_top"
          fill="rgb(32, 146, 237)"
          d="M261,126c-16.5-44.6-57.9-70.9-102.3-70.9c-40.5,0-66.1,31.2-98.6,64.4c-0.9,1.8-1.2,3.6,0.7,5.6L88,152.2
            c1.4,1.4,2.2,1.4,3.4,0l41.5-41.5c19-19,35.6-23.5,53.5-23.5c34.6,0,54,15.7,71.2,40.6c2.6,3.7,3.9,3.2,3.9,3.2
            S262.5,130.4,261,126z"/>

        <path
          ref="keypad_left_bottom"
          fill="rgb(32, 146, 237)" 
          d="M111.5,148.5l-11.2,11.2c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2c1.4,1.4,3.5,1.4,4.9,0l11.2-11.2
            c1.4-1.4,1.4-3.5,0-4.9l-11.2-11.2C115,147.1,112.8,147.1,111.5,148.5z"/>

        <path
          ref="keypad_left_middle"
          fill="rgb(32, 146, 237)" 
          d="M135.6,124.3l-11.2,11.2c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2c1.4,1.4,3.5,1.4,4.9,0l11.2-11.2
            c1.4-1.4,1.4-3.5,0-4.9l-11.2-11.2C139.2,122.9,136.9,122.9,135.6,124.3z"/>

        <path
          ref="keypad_left_top"
          fill="rgb(32, 146, 237)"
          d="M164.6,100.1c-1.4-1.4-3.5-1.4-4.9,0l-11.2,11.2c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2c1.4,1.4,3.5,1.4,4.9,0
            l11.2-11.2c1.4-1.4,1.4-3.5,0-4.9L164.6,100.1z"/>

        <path
          ref="s_bottom"
          fill="rgb(32, 146, 237)"
          d="M212.3,147.7c-1.4-1.4-2.2-1.4-3.4,0l-41.5,41.5c-19,19-35.6,23.5-53.5,23.5c-34.6,0-54.1-15.7-71.2-40.6
            c-2.5-3.7-3.9-3.2-3.9-3.2s-1.1,0.7,0.5,5.1c16.5,44.6,57.9,70.9,102.3,70.9c40.5,0,66.1-31.2,98.6-64.4c0.9-1.8,1.2-3.6-0.6-5.6
            L212.3,147.7z"/>

        <path
          ref="keypad_right_bottom"
          fill="rgb(32, 146, 237)" 
          d="M135.6,172.5l-11.2,11.2c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2c1.4,1.4,3.5,1.4,4.9,0l11.2-11.2
            c1.4-1.4,1.4-3.5,0-4.9l-11.2-11.2C139.2,171.3,136.9,171.3,135.6,172.5z"/>

        <path
          ref="keypad_right_middle"
          fill="rgb(32, 146, 237)" 
          d="M164.6,175.8l11.2-11.2c1.4-1.4,1.4-3.5,0-4.9l-11.2-11.2c-1.4-1.4-3.5-1.4-4.9,0l-11.2,11.2
            c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2C161.1,177.1,163.3,177.1,164.6,175.8z"/>

        <path
          ref="keypad_right_top"
          fill="rgb(32, 146, 237)" 
          d="M188.8,151.6l11.2-11.2c1.4-1.4,1.4-3.5,0-4.9l-11.2-11.2c-1.4-1.4-3.5-1.4-4.9,0l-11.2,11.2
            c-1.4,1.4-1.4,3.5,0,4.9l11.2,11.2C185.2,153,187.4,153,188.8,151.6z"/>

      </g>
    </svg>

  </div>
</template>

<script>
import { TweenMax } from "gsap"
export default {
  name: "Spinner",
  props: {
    size: {
      type: String,
      default: "height: 100px; width: 100px;"
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    TweenMax.to(this.$refs.circle_full, 1, {
      rotation: 360,
      ease: "Linear.easeNone",
      svgOrigin: "150 150",
      smoothOrigin: true,
      repeat: -1
    })
    TweenMax.to(this.$refs.circle_quarter, 1, {
      rotation: 360,
      ease: "Linear.easeNone",
      svgOrigin: "150 150",
      smoothOrigin: true,
      repeat: -1
    })
    TweenMax.staggerFromTo(
      [
        this.$refs.keypad_left_top,
        this.$refs.keypad_left_bottom,
        this.$refs.keypad_left_middle,
        this.$refs.keypad_right_top,
        this.$refs.keypad_right_bottom,
        this.$refs.keypad_right_middle
      ],
      1,
      { scale: 1 },
      {
        scale: 0,
        transformOrigin: "center center",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5
      },
      0.25
    )
  }
}
</script>