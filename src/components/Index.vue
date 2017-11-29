<template>
	<div id="index">
		<router-link v-for="(r,idx) in routerList" :to="r" key="r" class="links"> {{ idx + 1 }}. {{ r }} </router-link>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data () {
		return {
			routerList: [
				'music',
				'form'
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#index{
		padding: 20px;
	}
	.links{
		display: block;
		text-decoration: none;
		cursor: pointer;
		font-size: 20px;
		margin: 10px;
	}
</style>
