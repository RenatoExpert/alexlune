//var velocity = document.getElementById('velocity');
var min = 0;
var stop = 1;
var factor = 360000;

const indispo = function () { window.alert('BRPT: Recurso ainda nao disponivel! \r\nEN: Not avaliable!')};
const startAnimation = function () {
	if ((stop == 0)) {stop = 1}
	else {stop = 0};
};
const changeTime = function (fac) { min += fac };
const runcheck = function () { 
	if ((stop == 0 )) { min+=100 } 
	requestAnimationFrame (runcheck)
};
runcheck();
