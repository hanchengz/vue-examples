<!-- Todos.vue -->
<template>
	<transition name="fade">
		<div class="todos" v-if="status">
			<input class="input" type="text" name="todos" placeholder="fuck you" v-model="todo">
			<button class="btn" @click="add">Add</button>
			<ul class="list">
				<transition-group name="todo">
					<li class="todo-item" v-for="todo in todos" :key="todo" @touchstart="start" @touchend="end">{{ todo }}</li>
				</transition-group>
			</ul>
		</div>
	</transition>
</template>


<script>
	export default {
		data: function(){
			return {
				status: false,
				position: {},
				todo: '',
				todos: ['很广泛的看就是看就的是个就看国欢德国进口的房间还是大噶','guaygfjhkdgfahjdsgf','gdjhfsfgfjhkdsagfjhsdgfjhgsdfjhgsajhfgsjahgfsjagfjhsag']
			}
		},
		created: function(){
			setTimeout(() => {
				console.log(this.status);
				this.status = true;
				console.log(this.status);
			},100)
		},
		methods: {
			add: function(){
				var lastTodo = this.todos[this.todos.length - 1];
				if (this.todo === '' || this.todo === lastTodo) {
					return
				} else {
					this.todos.push(this.todo);
				}
				console.log(this.todos);
			},
			start: function(e){
				this.position = e;
			},
			end: function(e){

				var endX = e.changedTouches[0].screenX;
				var endY = e.changedTouches[0].screenY;

				var gapX = this.position.touches[0].screenX - endX;
				var gapY = this.position.touches[0].screenY - endY;

				if (gapX > 60 && gapY < 60) {
					var txt = this.position.srcElement.innerText;
					var idx;
					for (var i = 0; i < this.todos.length; i++) {
						if (this.todos[i] === txt) {
							idx = i;
							break
						}
					}
					this.todos.splice(idx,1);
				}
			}
		},
		mounted: function(){
			var html = document.getElementsByTagName("html")[0];
			html.style.position = "fixed";
			html.style.top = 0;
		}
	}
</script>



<style scoped>

.fade-enter-active,.fade-leave-active{
	transition: alll .5s;
}
.fade-enter{
	opacity: 0;
	transform: scale(1.5);
}
.fade-leave-to{
	opacity: 0;
	transform: scale(0.1) translateY(1000px);
}


.todo-enter-active,.todo-leave-active{
	transition: all .5s;
}
.todo-enter{
	opacity: 0;
	transform: scale(1.5) translateY(20px);
}
.todo-leave-to{
	opacity: 0;
	transform: translateX(-20px);
}





.todos{
	text-align: center;
	padding-top: 50px;
	margin: 0 29px;
	transition: all 1s;
}

	
.input{
	width: 200px;
	padding: 5px;
	border: 1px solid #EEE;
	outline: none;
	margin-right: 10px;
}
.btn{
	padding: 5px;
	border: none;
	background-color: #EEE;
	border-radius: 5px;
	outline: none;
}
.list{
	margin-top: 20px;
}
.todo-item{
	display: block;
	max-width: 300px;
	border-bottom: 1px solid #EEE;
	margin: 0 auto;
	word-break: break-all;
	padding: 10px;
}


	
</style>