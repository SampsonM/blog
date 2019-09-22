<template>
  <div :class="['app', { 'menu-closed': !isMenuOpen }]">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class App extends Vue {
  @State private isMenuOpen!: boolean
  @Action private toggleMenu: any

  private created(): void {
    this.$router.beforeEach((to, from, next) => {
      const pageLeft = from.path.split('/')[1]
      this.toggleMenu(pageLeft)
      next()
    })
  }
}
</script>

<style lang="scss">
.app {  
  background: linear-gradient(45deg, $primary-dark-15 25%, $primary-dark-15 25%, $primary-colour 100%);
  height: 100%;
  overflow: auto;
  transition-duration: 0.3s;
  border: 5px solid;
  border-image-source: linear-gradient(45deg, #606124 25%, #024833 100%);
  border-image-slice: 1;

  @include tablet {
    background: linear-gradient(45deg, $primary-dark 25%, $primary-dark 25%, $primary-colour 100%);
    border-image-source: linear-gradient(45deg, #474820 25%, #024833 100%);
    height: 100vh;
  }
}

.menu-closed {
  border-width: 0;
}
</style>
