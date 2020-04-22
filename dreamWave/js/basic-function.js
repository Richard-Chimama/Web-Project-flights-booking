// JavaScript Document
var msg = 'Sing up to receive our newslettwe for 10% off!';
function updateMessage(){
	var el = document.getElementById('message');
	el.textContent = msg;
}

var area = function(h,w){
	return h * w;
};
	
var wallsize = area(34,8822);
document.write(wallsize);
updateMessage();