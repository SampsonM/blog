<template>
  <transition appear name="about" mode="in-out">
    <section class="about">
      <div class="about__title-container">
        <h1 class="about__title">
          Mark Sampson,
          <br />Software Developer
        </h1>

        <span class="about__back">
          <router-link to="/" class="about__back-link">
            <arrow-up-bold-box></arrow-up-bold-box>
          </router-link>
        </span>
      </div>

      <div class="about__content">
        <p class="about__text-left">
          Currently 
          <a
            href="https://www.linkedin.com/in/mark-sampson-software-developer/"
            target="blank"
            class="about__link">working</a>
           as a contract software developer building modern sustainable web solutions.
          In my spare time I enjoy trying out different tech within personal projects, playing the guitar, mountain biking and rushing to meet Open University deadlines.
        </p>

        <p class="about__text-right">
          Unafraid to get involved with any part of the stack I'm comfortable building web apps using vanillaJS/TS, Vue and React, and use XP practices such as TDD where practical.
          I have experience building simple databases with MongoDB, MLab and AWS, and have built 
          <a
            href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"
            target="blank"
            class="about__link">CI/CD</a> pipelines using Jenkins and Azure pipelines to automate test, build and deployment processes.
        </p>
        
        <p class="about__text-left">
          Passionate about learning and sharing knowledge I have ran sessions to teach basic coding principles with Whalley Range Girls School and The Princes Trust, 
           mentored tech returners at Booking.com and ran 1-2-1 sessions with junior developers on the fundementals of JavaScript.
        </p>

        <p class="about__text-right">
          My personal successes include adding Lighthouse tests to 
          Jenkins build pipelines to highlight accessibility flaws and monitor page performance, 
          and building an in-house form validation framework for Vue and TypeScript.
        </p>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArrowUpBoldBox from 'vue-material-design-icons/ArrowUpBoldBox.vue'

@Component({
	components: {
		ArrowUpBoldBox
	}
})
export default class About extends Vue {
}
</script>

<style lang="scss">
.about-enter-active {
  animation: pageScreenIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.about-leave-active {
  animation: pageScreenOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: pageScreenOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.about {
  overscroll-behavior: none;
  position: relative;
  padding: 15px;
  min-height: 100vh;
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
    display: flex;
    flex-direction: column;

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
      transition-duration: 0.2s;

      &:hover,
      &:focus {
        outline: none;
        color: $primary-light-link;
        animation: flash 5s;
      }
    }
  }

  &__text-left {
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

  &__text-right {
    max-width: 460px;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    align-self: flex-end;
    margin-bottom: 40px;

     @include tablet {
      font-size: 28px;
      line-height: 38px;
      max-width: 80%;
    }
  }

  &__link {
    color: $primary-light-link;
    padding: 0 4px 4px 4px;
    border-radius: 5px;
    border: 2px solid transparent;

    &:focus,
    &:hover {
      transition-duration: 0.2s;
      outline: none;
      border: 2px solid $secondary-colour;
    }

    &:hover {
      background-color: $secondary-colour;
      color: $primary-text;
    }
  }
}
</style>
