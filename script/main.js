var speed = document.getElementById('speed');
var min = 0;
var stop = 1;
var factor = 360000;

const pureMin = function (mm) { return mm % 60};
const hoursFromMin = function (mm) { return Math.round((mm/60)%24) };
const daysFromMin = function (mm) { return Math.round(mm/1440) };

const indispo = function () { window.alert('BRPT: Recurso ainda nao disponivel! \r\nEN: Not avaliable!')};
const startAnimation = function () {
	if ((stop == 0)) {stop = 1}
	else {stop = 0};
};
const changeTime = function (fac) { min += fac };
const runcheck = function () { 
	if ((stop == 0 )) { min += (speed.value*2) } 
	requestAnimationFrame (runcheck)
};
runcheck();
