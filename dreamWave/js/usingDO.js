// JavaScript Document
var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b> page address: </br>' + document.URL + '<br />';
msg += '<b> last modified: </b>' + document.lastModefied + '</p>';
msg += '<b> last modified:  </b>' + document.lastModified + '</p>'; <br />
msg += '<b> last history:  </b>' + window.history + '</p>';


var el = document.getElementById('footer');
el.innerHTML = msg;