// JavaScript Document
var username, message;
username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

/*The code below provide string with qoute and handle them.
*/
var title;
var messages;
title = "Molly's Special Offers";
messages = '<a href=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNotes = document.getElementById('sign');
elNotes.innerHTML =messages;

/*the code uses boolean to display a message*/
var inStock;
var shipping;

inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;




