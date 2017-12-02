// music.js


let music = {}


var canvas = null;
var data = null;
var g = null;
var analyser = null;

function draw(){
	// g.clearRect(0,0,1024,300);

	g.fillStyle = 'rgba(255,255,255,.8)'

	g.fillRect(0,0,1024,300)

	// analyser.getByteTimeDomainData(data);
	analyser.getByteFrequencyData(data);
	// window.requestAnimationFrame(draw);


	g.beginPath();
	g.moveTo(0,128);
	g.strokeStyle = '#BBB';
	g.fillStyle = '#BBB';
	g.lineWidth = 2;
 
	// data.forEach((y,x) => {
	// 	g.lineTo(x,y);
	// })
	for (var i = 0; i < data.length; i+=11) {
		var x = i,y = data[i];
		g.fillRect(x,300 - y,10,300);
	}
	g.stroke();


}


music.init = function(audio,_canvas){

	canvas = _canvas;
	canvas.width = 1024;
	canvas.height = 300;
	g = canvas.getContext('2d');

	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	analyser = audioCtx.createAnalyser();

	var source = audioCtx.createMediaElementSource(audio);
	source.connect(analyser); 
	analyser.connect(audioCtx.destination);

	analyser.fftSize = 2048;
	var bufferLength = analyser.frequencyBinCount;
	data = new Uint8Array(bufferLength);
	analyser.getByteTimeDomainData(data);


	draw();

	setInterval(draw,36);

	// setInterval(function(){
	// 	analyser.getByteTimeDomainData(data);
	// 	console.log(data);
	// },1000)
}



export default music

