<!-- Music.vue -->
<template>
	<div class="tickets">
		<div class="t-item" v-for="ticket in tickets" :key="ticket.id"> {{ ticket.price }} </div>
	</div>
</template>


<script>
	export default {
		data: function(){
			return {
				tickets: [
					{
						id: '1134',
						price: '10',
						discount: '100'
					},
					{
						id: '1234',
						price: '20',
						discount: '200'
					},
					{
						id: '1534',
						price: '30',
						discount: '300'
					}
				]
			}
		},
		created: function(){
		
		}
	}
</script>


<style scoped>
	.t-item{
		width: 80%;
		height: 80px;
		background-color: #EEE;
		margin: 10px auto;
	}
</style>








