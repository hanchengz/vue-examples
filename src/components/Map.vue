<!-- Map.vue -->
<template>
	<div>
		<audio src="static/music.mp3" autoplay loop controls="controls" ref="audio"></audio>
		<canvas ref="canvas">
			fuck you!
		</canvas>
	</div>
</template>


<script>

	import music from '../utils/music'

	export default {
		data: function(){
			return {

			}
		},
		mounted: function(){

			var canvas = this.$refs.canvas;
			var audio = this.$refs.audio;
			music.init(audio,canvas);




		}
	}
</script>



<style scoped>
	
</style>