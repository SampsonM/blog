<template>
  <transition appear name="about" mode="in-out">
    <div class="about">
      <router-link to="/" class="about__back">
        <arrow-up-bold-box></arrow-up-bold-box>
      </router-link>

      <div class="about__content">
        <h1 class="about__title">
          Mark Sampson,
          <br />Front End Developer
        </h1>

        <p class="about__text">
          Currently working at
          <a href="https://www.moneysupermarket.com" target="blank" class="about__link">Moneysupermarket</a>
          using VueJS & Typescript to build new features and optimize existing ones.
          In my spare time I enjoy building websites and experimenting with tech.
        </p>
      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import Swiper from '@/helpers/swipe'
import ArrowUpBoldBox from 'vue-material-design-icons/ArrowUpBoldBox.vue'

@Component({
	components: {
		ArrowUpBoldBox
	}
})
export default class About extends Vue {
	@State private isAboutOpen!: boolean
	@Action private toggleMenu: any

	private mounted(): void {
		new Swiper('.about').onDown(() => this.$router.push({ path: '/' })).run()
	}
}
</script>

<style lang="scss">
.about-enter-active {
  animation: screenIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.about-leave-active {
  animation: screenOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: screenOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
	
	&__back {
		position: absolute;
		right: 20px;
		color: $primary-light-link;

		@include tablet {
			transform: scale(1.8);
			right: 30px;
			top: 30px;
		}
	}

  &__content {
    max-width: 460px;

    @include mobile {
      padding: 0 20px;
    }

    @include tablet {
      max-width: none;
      width: 100%;
    }
  }

  &__title {
    color: $secondary-text-header;
    font-size: 8vw;
    line-height: 40px;
    margin: 15px 0 25px 0;
    transition-duration: 0.2s;

    @include mobile {
      font-size: 2.1rem;
    }

    @include tablet {
      font-size: 8vw;
      line-height: 8vw;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 30px;

    @include tablet {
      font-size: 28px;
      line-height: 38px;
      max-width: 80%;
    }
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
