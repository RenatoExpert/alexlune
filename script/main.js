const	posang	= document.getElementById('posang'),
	terra	= document.getElementById('terrain'),
	showluz	= document.getElementById('lumus'),
	sombra	= document.getElementById('sombra'),
	nmLabel	= document.getElementById('newmoon'),
	TiDi	= document.getElementById('localtime');

var	terraang	= 0,
	utime		= new Date().getTime();

class Astro {
	time_factor;
	constructor(id, time_factor) {
		this.svg = document.getElementById(id);
		this.time_factor = time_factor*1000*60;
	}
	get angle () {
		return Math.round((utime/this.time_factor)%360);
	}
	get next_time () {
		let	percent	= 1-(this.angle/360);
		//	Moon orbit shall be a period of a Synodic Month: 29 d 12 h 44
		let	remains	= percent*((29*24*60*60*1000)+(12*60*60*1000)+(44*60*1000));
		let	days	= Math.floor (remains / (24*60*60*1000));
		let	hours	= Math.floor (remains / (60*60*1000)%24);
		return `${days} days, ${hours} hours`
	}
	update () {
		var x = parseFloat(this.svg.getAttributeNS(null, 'x'));
		var y = parseFloat(this.svg.getAttributeNS(null, 'y'));
		this.svg.setAttributeNS (null,'x',Calcs.calc_x(this.angle));
		this.svg.setAttributeNS (null,'y',Calcs.calc_y(this.angle));
	}
}

class Moon extends Astro {
	mare = false;
	constructor (id, time_factor) {
		super (id, time_factor);
	}
	sec_calc (alfa) {
		let	beta	= Math.round( Math.abs(moon.angle) % 180/1.8);
		if (alfa >= 180) { 
			this.mare	= false; 
			return beta;
		} 
		else if (alfa < 180) { 
			this.mare	= true;
			return 100-beta;
		}
		else {alert('error')}
	}
	render_shadow () {
		var	lumus	= this.sec_calc (this.angle);
		var	mooncx	= parseFloat (sombra.getAttributeNS(null, 'cx'));
		showluz.innerHTML	= lumus;
		sombra.setAttributeNS (null, 'cx', sombrapos());
		nmLabel.innerHTML	= this.next_time;
		this.update();
	}
}

class Calcs {
	static hoursFromMs	= mm => Math.abs(Math.round((1000*mm/60)%24));
	static daysFromMs	= mm => Math.abs(Math.round(1000*mm/1440));
	static calc_x 		= angle => (Math.cos(toRadians(angle))*200)+260;
	static calc_y		= angle => (Math.sin(toRadians(angle))*200)+260;
}

class Wheel {
	stop = true;
	speed = document.getElementById('speed');
	static runcheck () { 
		utime	= stop ? utime : utime+(1000*60*speed.value);
		requestAnimationFrame (Wheel.runcheck);
	}
	static changeTime (fac) { utime += fac * 60 * 1000 }; // acessed by 'Increment' menu (min,hours,days controls)
}

const	toRadians	= angle => angle*(Math.PI / 180);
const	get_angs	= () => terraang = Math.round((utime/(4*1000*60))%360);  
const	sombrapos	= () => (moon.angle/1.8)-25;
const	indispo		= () => window.alert('BRPT: Recurso ainda nao disponivel! \r\nEN: Not avaliable!');


function ciclomaior () {
	get_angs();
	posang.innerHTML = moon.angle;
	terra.style.transform = 'rotate(' + terraang + 'deg)';
	requestAnimationFrame (ciclomaior);
}

animationController.innerHTML	= '&#x23EF';
animationController.onclick	= function () {
	stop	= !stop;
	this.innerHTML	= stop ? '&#x23EF' : '&#x23F8';
}

function displayTime () {
	TiDi.innerHTML = new Date(utime).toLocaleString('sv');
	requestAnimationFrame(displayTime);
}

function moon_animation () {
	moon.render_shadow();
	requestAnimationFrame (moon_animation);
}	

moon = new Moon ('lua1', 119);

ciclomaior();
Wheel.runcheck();
moon.render_shadow();
displayTime();
moon_animation();

/* script para trocar de pág e idioma */
let selectEl = document.getElementsByTagName('select');
selectEl[0].addEventListener('change', function() {
    location.href=this.value;
});