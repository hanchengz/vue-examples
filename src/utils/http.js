// http.js

let http = {}

// 拼接查询字符串
function queryString(o){
	return Object.keys(o).map(e => {
		var val = o[e];
		return `${e}=${val}`;
	}).join('&');
}

var couter = 0;
var callBack = 'musicPlayer'

// jsonp
http.jsonp = function(url,data){

	var funcName = callBack + ++couter;

	data.callback = funcName;

	var fullUrl = url + '?' + queryString(data);

	return new Promise((res,rej) => {
		window[funcName] = res;
		var body = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.setAttribute('src', fullUrl);
        body.appendChild(script);
	})


}

export default http









