<template>
    <div class="home">
      <Menu></Menu>
    </div>
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
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
