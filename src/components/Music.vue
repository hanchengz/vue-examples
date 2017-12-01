<!-- Music.vue -->
<template>
		<div id="music">
			<input type="text" v-model="music" placeholder="搜索音乐" class="search" @keyup="typing">
			<div class="result">
				<span 
				v-for="m in musicList" 
				class="result-item" 
				@click="toDetail(m.hash)" 
				>
					{{ m.filename }}
				</span>
			</div>
		</div>
</template>


<script>


	export default {
		data: function(){
			return {
				music: '',
				timer: null,
				musicList: []
			}
		},
		created: function(){

		},
		methods: {
			search: function(){
				if (this.music === '') {
					return
				} else {
					var url = 'http://mobilecdn.kugou.com/api/v3/search/song';
					var parameters = {
						format: 'jsonp',
						keyword: this.music,
						page: 1,
						pagesize: 20,
						
					}
					this.http.jsonp(url,parameters).then(res => {
						console.log(res.data);
						this.musicList = res.data.info;
					},rej => {
						console.log(rej);
					}).catch(err => {
						console.log(err);
					})
				}

			},
			typing: function(){
				clearTimeout(this.timer);
				this.timer = setTimeout(this.search.bind(this),1000);
			},
			toDetail: function(hash){
				this.$router.push({
					name: 'Detail',
					params: {
						hash: hash
					}
				})
			}
		}
	}
</script>


<style scoped>
	.fade-enter-acitve,.fade-leave-active{
		transition: all 10s;
	}
	.fade-enter,.fade-leave-to{
		transform: scale(1.3);
	}
	.search{
		width: 94%;
		height: 30px;
		/*background-color: #FCC;*/
		background-color: rgba(255,255,121,.5);
		border: 0;
		outline: none;
		padding: 8px 3%;
		font-size: 16px;
	}
	.result{
		/*background-color: #FFC;*/
		background-color: rgba(255,255,121,.2);
	}
	.result-item{ 
		display: block;
		width: 94%;
		height: 20px;
		padding: 8px 3%;
		/*padding-bottom: 5px;*/
		margin-bottom: 5px;
		border-bottom: 1px solid #EEE;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.result span:last-child{
		margin-bottom: -5px
	}
	
</style>








