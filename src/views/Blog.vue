<template>
	<transition appear name="blog" mode="in-out">
		<div class="blog">
			<router-link to="/" class="blog__back">
				<arrow-up-bold-box></arrow-up-bold-box>
			</router-link>
		
		<div>
			Coming soon.
		</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swiper from '@/helpers/swipe'
import ArrowUpBoldBox from 'vue-material-design-icons/ArrowUpBoldBox.vue'

@Component({
	components: {
		ArrowUpBoldBox
	}
})
export default class Blog extends Vue {
	private mounted(): void {
		new Swiper('.blog').onDown(() => this.$router.push({ path: '/' })).run()
	}
}
</script>

<style lang="scss">
.blog-enter-active {
  animation: screenIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.blog-leave-active {
  animation: screenOutMobile 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @include tablet {
    animation: screenOutTablet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

.blog {
	position: absolute;
  padding: 15px;
  height: 100%;
	width: 100%;
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
}
</style>
