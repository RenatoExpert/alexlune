var posang = document.getElementById('posang');
var terra = document.getElementById('terrain');
var terraang = 0;

function toRadians (angle) {return angle * (Math.PI / 180)}
const get_angs = function () {
	terraang = Math.round((min/4)%360);
}  

const ciclomaior = function () {
	get_angs();
	posang.innerHTML = lua.angle;
	terra.style.transform = 'rotate(' + terraang + 'deg)';
	requestAnimationFrame (ciclomaior);
}
ciclomaior();
