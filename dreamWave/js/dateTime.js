// JavaScript Document

var today = new Date();//initiate the built in class to this class
var hourNow = today.getHours();// collect the method hour and initiate
var greeting;

if(hourNow >= 18){
	greeting = 'Good evening!';
} else if(hourNow > 12){
	greeting = 'Good afternoon!';
}else if(hourNow >0){
	greeting = 'Good morning';
}else{
	greeting = 'welcome';
}

//document.write('<h2>' + greeting + '</h2');

var price, quantity, total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;