// JavaScript Document
var colors;
colors = ['white', 'black', 'custom'];

//Update the third item in the array
colors[3] = 'beige';
colors[4] = 'cyan';
colors[2] = 'lime';

var el = document.getElementById('colors');
el.textContent = colors[2];


