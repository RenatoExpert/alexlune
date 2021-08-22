var min = 0;
var factor = 360000;

lua = new Astro('lua1',119);

class Wheel {
	stop = true;
	speed = document.getElementById('speed');
	static runcheck () { 
		if (stop == 0) { min += (speed.value*2) } 
		requestAnimationFrame (Wheel.runcheck);
	}
	static changeTime (fac) { min += fac }; // acessed by 'Increment' menu (min,hours,days controls)
}

// Animation Controller
// Controller for animation (play/pause)

animationController.innerHTML = '&#x23EF';
animationController.onclick = function () {
	stop=!stop;
	if (stop == true) {
		this.innerHTML = '&#x23EF';
	}
	else {
		this.innerHTML = '&#x23F8';
	}
}

class Calcs {
	static pureMin (mm) { return mm % 60 };
	static hoursFromMin (mm) { return Math.abs(Math.round((mm/60)%24)) };
	static daysFromMin (mm) { return Math.abs(Math.round(mm/1440)) };
	static calc_x (angle) { return (Math.cos(toRadians(angle))*200)+260 };
	static calc_y (angle) { return (Math.sin(toRadians(angle))*200)+260 };
}


const indispo = function () { window.alert('BRPT: Recurso ainda nao disponivel! \r\nEN: Not avaliable!')};

Wheel.runcheck();
