<template>
  <transition
    appear
    name="home"
    mode="in-out">
    <div class="home">
      <Menu></Menu>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home-enter-active {
  animation: homeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.home-leave-active {
  animation: homeIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}
 
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
