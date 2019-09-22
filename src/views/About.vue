<template>
  <transition
    appear
    name="about"
    mode="in-out">

    <div class="about">

      <h1 class="about__title">Mark <br> Sampson</h1>

      <img
        class="about__profile-picture"
        src="../assets/images/me.png"
        alt="mark sampson">
      
      <router-link to="/">
        <button>toggle</button>
      </router-link>
    </div>


  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class About extends Vue {
  @State private isAboutOpen!: boolean
  @Action private toggleMenu: any
}
</script>

<style lang="scss">
.about-enter-active {
  animation: aboutIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.about-leave-active {
  animation: aboutOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: aboutOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.about {
  height: 100%;
  z-index: 2;
  position: absolute;

  &__title {
    color: $secondary-text;
  }

  &__profile-picture {
    height: 200px;
    border-radius: 2px;
  }
}
</style>
