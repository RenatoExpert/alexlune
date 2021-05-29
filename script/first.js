var posang = document.getElementById('posang');
var lua1 = document.getElementById('lua1');
var ang = 0;

const calcx = function (ang) { return ((Math.cos(toRadians(ang))*200)+260) };
const calcy = function (ang) { return ((Math.sin(toRadians(ang))*200)+260) };

function toRadians (angle) {return angle * (Math.PI / 180)}

const ciclomaior = function () {
	ang%=360;
	posang.innerHTML = ang;
	var lua1x = parseFloat(lua1.getAttributeNS(null, 'x'));
	lua1.setAttributeNS(null, 'x', calcx(ang));
	var lua1y = parseFloat(lua1.getAttributeNS(null, 'y'));
	lua1.setAttributeNS(null, 'y', calcy(ang));
	ang++;
	requestAnimationFrame (ciclomaior);
}
ciclomaior();