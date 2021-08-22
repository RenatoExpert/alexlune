class Astro {
	constructor(id, time_factor) {
		this.svg = document.getElementById(id);
		this.time_factor = time_factor;
	}
	get angle () {
		return Math.round((min/this.time_factor)%360);
	}
	update () {
		var x = parseFloat(this.svg.getAttributeNS(null, 'x'));
		var y = parseFloat(this.svg.getAttributeNS(null, 'y'));
		this.svg.setAttributeNS(null,'x',this.calcx(this.angle));
		this.svg.setAttributeNS(null,'y',this.calcy(this.angle));
	}
	calcx (ang) {
		return (Math.cos(toRadians(ang))*200)+260;
	}
	calcy (ang) {
		return (Math.sin(toRadians(ang))*200)+260;
	}
}

