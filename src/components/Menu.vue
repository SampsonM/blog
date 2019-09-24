<template>
  <transition
    appear
    name="home"
    mode="in-out">
    <menu class="menu">
      <router-link
        :to="'/'+item"
        v-for="(item, i) in menuItems"
        :class="['menu__section', i === 0 ? 'menu__about' : 'menu__blog']"
        :key="i">
        <div class="menu__title">
          {{ item }}
        </div>

      </router-link>
    </menu>
  </transition>
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
.home-enter-active {
  animation: homeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.home-leave-active {
  animation: homeIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}

.menu {
  min-width: 235%;
	height: 110%;
  transform: rotate(45deg) translateX(-10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
	

  &__section {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  &__about {
    background-color: #bcf8c134;

    .menu__title {
      align-self: flex-end;
      -webkit-text-stroke: 3px #cfcd5f;
      color: transparent;
      animation: pulse 1s linear 4.8s infinite both;
    }
  }
  
  &__blog {
    background-color: #70707042;
  }

  &__title {
    -webkit-text-stroke: 3px #9fc73a;
    color: transparent;
    font-size: 110px;
    height: 120px;
    line-height: 119px;
    animation: pulse 1s linear 5s infinite both;
  }

  @include tablet {
  }

  @include desktop {
    &__section {
      float: left;
      width: 32%;
      margin-right: 2%;
      height: 100%;
    }
  }
}
</style>
