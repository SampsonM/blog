<template>
  <transition appear name="about" mode="in-out">
    <div class="about">

      <div class="about__title-container">
        <h1 class="about__title">
          Mark Sampson,
          <br />Front End Developer
        </h1>

        <span class="about__back">
          <router-link to="/" class="about__back-link">
            <arrow-up-bold-box></arrow-up-bold-box>
          </router-link>
        </span>
      </div>

      <div class="about__content">

        <p class="about__text-intro">
          Currently working at
          <a href="https://www.moneysupermarket.com" target="blank" class="about__link">Moneysupermarket</a>
          using VueJS & Typescript to build new features and optimize existing ones.
          In my spare time I enjoy building websites and experimenting with tech.
        </p>

        <p class="about__text-more">
          On the frontend I use VueJS and Typescript, and if I need to build any RESTful API's I use NODE.
          I have experience building databases with MongoDB, MLab and AWS S3 buckets. Other technologies used include ReactJS, AngulaJS and a little Java.
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
  animation: aboutScreenIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.about-leave-active {
  animation: aboutScreenOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: aboutScreenOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.about {
  position: absolute;
  padding: 15px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 50%;
  transform: translateX(-50%);
  display: flex;
  justify-items: center;
  flex-direction: column;
  z-index: 2;
	color: $secondary-text;

  &__content {
    max-width: 100%;

    @include mobile {
      padding: 0 20px;
    }

    @include tablet {
      max-width: none;
      width: 100%;
    }
  }

  &__title-container {
    display: flex;
    justify-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(45deg, #00251a, #03533b);
    margin-bottom: 15px;
  }

  &__title {
    background-color: $secondary-text-header;
    color: black;
    mix-blend-mode: screen;
    width: 100%;
    font-size: 8vw;
    line-height: 40px;
    padding: 15px 0 25px 0;
    transition-duration: 0.2s;
    border-radius: 3px 0 0 3px;

    @include mobile {
      font-size: 2.1rem;
    }

    @include tablet {
      font-size: 8vw;
      line-height: 8vw;
    }
  }

  &__back {
    display: flex;
    justify-content: center;
    background-color: $secondary-text-header;
    color: black;
    mix-blend-mode: screen;
    max-height: 100%;
    width: 30px;
    padding-top: 4px;
    border-radius: 0 3px 3px 0;

		@include tablet {
      padding-top: 10px;
      width: 50px;

      svg {
        transform: scale(1.8);
      }
    }
    
    &-link {
      height: 32px;
      color: #00261a;
    }
  }

  &__text-intro {
    max-width: 460px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 40px;

    @include tablet {
      font-size: 28px;
      line-height: 38px;
      max-width: 80%;
    }
  }

  &__text-more {
    max-width: 460px;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    float: right;

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
