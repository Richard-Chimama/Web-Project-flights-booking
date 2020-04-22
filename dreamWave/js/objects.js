// JavaScript Document
var hotel = {
	name: 'Quay',
	rooms: 100,
	booked: 25,
	gym: true,
	roomType: ['twin','double','suite'],
	
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};

hotel.name = 'Mayukwayukwa';
hotel['booked'] = 76;

var hotelName = document.getElementById('hotelName');
hotelName.textContent = hotel.name;

var roomsFree = document.getElementById('roomsFree');
roomsFree.textContent =	hotel.checkAvailability();

var place = window.history.length;
document.write(place);
