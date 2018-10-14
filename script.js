'use strict' ;

var d = new Date();
var dn = d.getDay();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

function insertZero(){
		day = '0' + day;
		month = '0' + month;
} 

if (day<10) {
	insertZero();
}
document.write(h + ':' + m + ':' + s + '  ' + day + "." + month + "." + year + '</br>');

var week = ['', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
function getDn() {
for (var i = 1; i < 8; i++) {
	if (i == dn && i < 7) {
		document.write(week[i]);
	} else if (dn < 1 && i > 6) {
		document.write('Воскресенье');
	}
}
}
getDn();

function checkDate() {
	var total = document.getElementsByClassName('total');
	var inputDate1 = document.getElementById('first').value;
	var inputDate2 = document.getElementById('second').value;
	var dayImput1 = inputDate1.getDay();
	var dayImput2 = inputDate2.getDay();
	var diff = document.createElement('div');
		diff = dayImput2 - dayImput1;
		total.appendChild(diff);
}