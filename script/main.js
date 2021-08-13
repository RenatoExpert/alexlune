var speed = document.getElementById('speed');
var animationController = document.getElementById('animationController');
var min = 0;
var factor = 360000;

const pureMin = function (mm) { return mm % 60};
const hoursFromMin = function (mm) { return Math.round((mm/60)%24) };
const daysFromMin = function (mm) { return Math.round(mm/1440) };
const changeTime = function (fac) { min += fac };

const indispo = function () { window.alert('BRPT: Recurso ainda nao disponivel! \r\nEN: Not avaliable!')};

// Controller for animation (play/pause)
animationController.innerHTML = '&#x23EF';
var stop = true;
animationController.onclick = function () {
	stop=!stop;
	if (stop == true) {
		this.innerHTML = '&#x23EF';
	}
	else {
		this.innerHTML = '&#x23F8';
	}
}

// its the real animation wheel. Changes the min 
const runcheck = function () { 
	if (stop == 0) { min += (speed.value*2) } 
	requestAnimationFrame (runcheck)
};
runcheck();
