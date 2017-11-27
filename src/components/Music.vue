<!-- Music.vue -->
<template>
	<div id="music">
		<input type="text" v-model="music" placeholder="搜索音乐" class="search">
	</div>
</template>


<script>
	export default {
		data: function(){
			return {
				music: ''
			}
		}
	}
</script>


<style scoped>
	.search{
		width: 100%;
		height: 30px;
		background-color: #EEE;
		border: 0;
		outline: none;
		padding: 5px 10px;
		font-size: 15px;
	}
	
</style>