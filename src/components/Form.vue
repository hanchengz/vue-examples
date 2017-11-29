<!-- Form.vue -->
<template>
	<div id="form">
		<span>省份：</span>
		<select name="province" v-model="selected">
			<option value='' disabled selected>请选择省份</option>
			<option 
			v-for="(p,idx) in provinces" 
			:value="{
				idx: idx,
				province: p
			}"
			>{{ p }}</option>
		</select>
		<br/>
		<span>城市：</span>
		<select name="city">
			<option value='' disabled selected>请选择城市</option>
			<option v-for="c in cities[provinceIdx]" :value="c">{{ c }}</option>
		</select>
		<v-distpicker @selected="onSelected"></v-distpicker>
	</div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import Vue from 'vue'

Vue.component('v-distpicker', VDistpicker)

export default {
	data: function(){
		return {
			provinces: [
				'广东',
				'湖南',
				'湖北',
				'浙江'
			],
			cities: [
				['深圳','东莞','广州'],
				['湖南','111','2'],
				['湖北','aaa','bbb'],
				['浙江']
			],
			provinceIdx: -1,
			selected: ''
		}
	},
	watch: {
		selected: function(){
			this.provinceIdx = this.selected.idx;
		}
	},
	methods: {
		onSelected: function(data){
			console.log(data);
		}
	}
}
</script>

<style scoped>
	select{
		outline: none;
	}
	.test{
		color: red;
		width: 100px;
		height: 50px;
		overflow: hidden;
	}
</style>