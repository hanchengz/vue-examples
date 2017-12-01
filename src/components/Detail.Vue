<!-- Detail.Vue -->
<template>
	<transition name="fade">
		<div class="detail">
			<div class="container">
				<div 
				class="album_img" 
				:style="
				'background-image:' + 'url' + '(' + imgSrc + ');'" 
				ref="img"
				></div>
			</div>
			<audio :src="musicSrc" ref="audio" loop></audio>
			<div class="info">
				<div class="song-name">{{ musicInfo.fileName }}</div>
				<div class="singer-name">{{ musicInfo.singerName }}</div>
				<div class="time" ref="width">
					<span class="now-time" ref="time"></span>
					<span class="ball" ref="ball"></span>
					<span class="now">{{ minutes + ':' + seconds }}</span>
					<span class="all">{{ setTime }}</span>
				</div>
			</div>
		</div>
	</transition>
</template>


<script>


	export default {
		data: function(){
			return {
				msg: 'detail',
				// nowTime: '00:00',
				minutes: '00',
				seconds: '00',
				musicInfo: {
					album_img: 'src',
					url: 'a',
					timeLength: 0
				}
			}
		},
		created: function(){
			console.log(this.$route.params);
			var url = 'http://m.kugou.com/app/i/getSongInfo.php';
			var parameters = {
					cmd: 'playInfo', 
					hash: this.$route.params.hash, 
					format: 'jsonp'
				}
			this.http.jsonp(url,parameters).then(res => {
				console.log(res);
				this.musicInfo = res;
			},rej => {
				console.log(rej);
			}).catch(err => {
				console.log(err);
			})
		},
		mounted: function(){
			// 设置图片高度
			var img = this.$refs.img;
			var width = img.offsetWidth;
			img.style.height = width + 'px';



			this.musicStart();


			// var audio = this.$refs.audio;
			document.addEventListener('WeixinJSBridgeReady',function(){
				console.log(1111111);
			})
		},
		computed: {
			imgSrc: function(){
				if (this.musicInfo.album_img === '') {
					return 'http://oymz85932.bkt.clouddn.com/IMG_3631.jpg'
				} else {
					var idx = this.musicInfo.album_img.indexOf('{');
					var src = Array.from(this.musicInfo.album_img);
					src.splice(idx,7);
					return src.join('');
				}	
			},
			musicSrc: function(){
				return this.musicInfo.url;
			},
			setTime: function(){
				var allTime = this.musicInfo.timeLength;
				var minutes = Math.floor(allTime / 60);
				var seconds = allTime - minutes * 60;
				return minutes + ':' + seconds;
			}
		},
		methods: {
			musicStart: function(){
				// 进度条
				var width = this.$refs.width.offsetWidth;
				var time = this.$refs.time;
				var ball = this.$refs.ball;
				var now = 0;
				var sec = 0;
				var min = 0;

				var timer = setInterval(() => {
					if (now > this.musicInfo.timeLength) {
						clearInterval(timer);
					}
					time.style.width = (width * (now / this.musicInfo.timeLength)) + 'px';
					ball.style.left = (width * (now / this.musicInfo.timeLength) - 7) + 'px';
					now++;
					sec++;
					// 歌曲时间
					if (sec < 10) {
						this.seconds = '0' + sec;
					} else if (sec === 59) {
						sec = 0;
						this.seconds = '0' + sec;
						if (min < 10) {
							this.minutes = '0' + (min + 1);
						} else {
							this.minutes = min + 1;
						}
					} else {
						this.seconds = sec;
					}


				},1000)
			}

		}



	}

</script>


<style scoped>
	.fade-enter-acive,.fade-leave-acive{
		transition: all .3s;
	}
	.fade-enter{
		transform: scale(1.3) translateX(-10px);
		opacity: 0;
	}
	.fade-leave-to{
		transform: translateX(300px);
		opacity: 0;
	}
	.container{
		margin: 0 40px;
		position: relative;
	}
	.album_img{
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.song-name,.singer-name{
		text-align: center;
		color: #555;
		word-break: break-all;
		margin: 0 20px;
	}
	.song-name{
		font-size: 20px;
		margin-bottom: 20px;
	}
	.singer-name{
		font-size: 16px;
		margin-bottom: 40px;
		color: #AAA;
	}
	.time{
		position: relative;
		height: 8px;
		margin: 0 20px;
		border-radius: 10px;
		background-color: #EEE;
	}
	.now-time{
		position: absolute;
		display: block;
		background-color: #AAA;
		height: 8px;
		border-radius: 10px;
	}


	.now,.all{
		display: block;
		position: absolute;
		top: 20px;
		font-size: 15px;
		color: #EEE;
	}
	.all{
		right: 0;
	}
	.ball{
		display: block;
		width: 14px;
		height: 14px;
		position: absolute;
		top: -3px;
		left: -7px;
		border-radius: 50%;
		background-color: #AAA;
	}


</style>