var posang = document.getElementById('posang');
var lua1 = document.getElementById('lua1');
var terra = document.getElementById('terrain');
var moonang = 0;
var terraang = 0;

const calcx = function (ang) { return ((Math.cos(toRadians(ang))*200)+260) };
const calcy = function (ang) { return ((Math.sin(toRadians(ang))*200)+260) };

function toRadians (angle) {return angle * (Math.PI / 180)}
const get_angs = function () { terraang = Math.round((min/240)%360); moonang = Math.round((min/7200)%360) }  

const ciclomaior = function () {
	get_angs();
	posang.innerHTML = moonang;
	var lua1x = parseFloat(lua1.getAttributeNS(null, 'x'));
	lua1.setAttributeNS(null, 'x', calcx(moonang));
	var lua1y = parseFloat(lua1.getAttributeNS(null, 'y'));
	lua1.setAttributeNS(null, 'y', calcy(moonang));
	terra.style.transform = 'rotate(' + terraang + 'deg)';
	min+=3600;
	requestAnimationFrame (ciclomaior);
}
ciclomaior();
