<template>
    <div class="a">
        <Calendar
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
        :markDate=arr
        ></Calendar>
    </div>
</template>

<script>

import Calendar from './x.vue';
export default {
    components :{
        'Calendar': Calendar
    },
	data: function(){
		return {
            arr: ['2018/7/1','2018/7/16','2018/6/2']
		}
	},
	watch: {

	},
	methods: {
        clickDay(data) {
            console.log(data); //选中某天
        },
        changeDate(data) {
            console.log(data); //左右点击切换月份
        },
        clickToday(data) {
            console.log(data); //跳到了本月
        }

	}
}
</script>

<style>

</style>

<style scoped>
    .b{
        color: red;
    }
</style>