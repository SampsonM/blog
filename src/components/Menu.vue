<template>
  <menu class="menu">
    <ul class="menu__list">
      <router-link
        :to="'/'+item"
        v-for="(item, i) in menuItems"
        class="menu__card-wrapper"
        :key="i">

        <transition
          appear
          :name="'card-'+i"
          mode="in-out">

          <card :title="item"></card>

        </transition>
      </router-link>
    </ul>
  </menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import { State, Action } from 'vuex-class'

@Component({
	components: {
		Card
	}
})
export default class Menu extends Vue {
	@State private isMenuOpen!: boolean
	@Action private toggleMenu: any

	private menuItems: string[] = [
		'About',
		'Blog'
	]
}
</script>

<style lang="scss">
.card-0-enter-active {
  animation: card0InMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: card0InTablet 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @include desktop {
    animation: card0InDesktop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.card-1-enter-active {
  animation: card1InMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: card1InTablet 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @include desktop {
    animation: card1InDesktop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.menu {
  width: 80%;
  display: flex;
  justify-content: center;

  &__list {
    opacity: 1;
    max-width: 400px;
    width: 100%;
    padding-top: 30px;
  }

  &__card-wrapper {
    list-style-type: none;
    text-decoration: none;
  }

  @include tablet {
    &__list {
      padding-top: 0;
    }

    &__card-wrapper {
      &:last-of-type {
        .card {
          margin-bottom: 0;
        }
      }
    }
  }

  @include desktop {
    &__list {
      max-width: none;
    }
  
    &__card-wrapper {
      float: left;
      width: 49%;
      margin-right: 2%;
      height: 100%;

      &:last-of-type {
        margin-right: 0;

        .card {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
