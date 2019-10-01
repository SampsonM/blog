<template>
  <div @click="$emit('clicked')" class="card">
    <h1 class="card__title">{{ title }}</h1>

    <div class="card__icon">
      <smart-card-outline v-if="title === 'About'"></smart-card-outline>
      <post-outline v-if="title === 'Blog'"></post-outline>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SmartCardOutline from 'vue-material-design-icons/SmartCardOutline.vue'
import PostOutline from 'vue-material-design-icons/PostOutline.vue'
import ImageMultiple from 'vue-material-design-icons/ImageMultiple.vue'

@Component({
	components: {
		SmartCardOutline,
		PostOutline,
		ImageMultiple
	}
})
export default class Card extends Vue {
	@Prop() private title!: string
}
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-colour;
  width: 100%;
  border: 1px solid $secondary-colour;
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 10px;

  &:hover {
    transition-duration: 0.5s;
    background-color: $secondary-colour;

    .card__title {
      color: $primary-text;
      transition-duration: 400ms;
    }

    path {
      transition-duration: 400ms;
      fill: $primary-text;
    }
  }

  &__title {
    color: $secondary-text;
    font-weight: 300;
    font-size: 28px;
  }

  &__icon {
    padding-top: 4px;
    float: right;
  }

  path {
    fill: $secondary-text;
  }

  @include tablet {
    height: 47%;
    margin-bottom: 2%;
  }

  @include desktop {
    height: 100%;
    margin-bottom: 0;
  }
}
</style>
