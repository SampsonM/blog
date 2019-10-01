<template>
  <transition appear name="about" mode="in-out">
    <div class="about">
      <router-link to="/">
        <button>Home</button>
      </router-link>

      <h1 class="about__title">
        Mark Sampson,
        <br />Front End Developer
      </h1>

      <p class="about__text">
        Currently working at
        <a href="www.moneysupermarket.com" class="about__link">Moneysupermarket</a>
        using VueJS & Typescript to build new features and optimize existing ones.
        In my spare time I enjoy building websites and experimenting with tech.
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import Swiper from '@/helpers/swipe'

@Component
export default class About extends Vue {
	@State private isAboutOpen!: boolean
	@Action private toggleMenu: any

	private mounted(): void {
		new Swiper('.about').onUp(() => console.log('swiped up')).run()
	}
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
  position: absolute;
  padding: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-items: center;
  flex-direction: column;
  z-index: 2;
  color: $secondary-text;

  &__title {
    color: $secondary-text-header;
    font-size: 8vw;
    line-height: 40px;
    margin: 25px 0;
    transition-duration: 0.2s;

    @include mobile {
      font-size: 2rem;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 30px;
  }

  &__link {
    color: $primary-light-link;
  }

  &__profile-picture {
    width: 100%;
    border-radius: 2px;
  }
}
</style>
