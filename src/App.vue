<template>
	<transition name="fade">
		<div id="app" v-if="none">
			<router-view/>
		</div>
	</transition>
</template>

<script>
	export default {
		data: function(){
			return {
				none: false
			}
		},
		created: function(){
			setTimeout(() => {
				this.none = true;
			},100)
		}

	}
	</script>
<style>
	.fade-enter-active,.fade-leave-active{
		transition: all .3s;
	}
	.fade-enter,.fade-leave-to{
		transform: scale(1.3) translateX(-10px)
	}
	*{
		padding: 0;
		margin: 0;
	}
</style>
