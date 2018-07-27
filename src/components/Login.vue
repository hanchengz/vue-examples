<template>
	<div class="login">
		<div class="input-container">
			<label for="username">账号：</label>
			<input v-model="username" id="username" type="text">
		</div>
		<div class="input-container">
			<label for="pwd">密码：</label>
			<input v-model="pwd" id="pwd" type="text">
		</div>
		<div class="submit-btn">登陆</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			username: '',
			pwd: ''
		}
	}
}
</script>

<style scoped>
	.login{
		width: 100%;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.input-container{
		text-align: center;
	}
	.input-container > input {
		display: inline-block;
		width: 60%;
		height: 40px;
		font-size: 18px;
		padding: 0 15px;
		margin-top: 20px;
		border: 1px solid #EEE;
	}
	.submit-btn{
		width: 40%;
		height: 40px;
		background-color: #18c58a;
		margin: 30px auto;
		color: #FFF;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
		border-radius: 10px;
	}
	.submit-btn:active{
		background-color: #FFF;
		color: #18c58a;
		border: 1px solid #18c58a;
	}
</style>
