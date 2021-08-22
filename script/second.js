var showluz = document.getElementById('lumus');
var sombra = document.getElementById('sombra');
var nmLabel = document.getElementById('newmoon');
var mare = 0;


const sombrapos = () => (lua.angle/1.8)-25;
const NewMoon = () => (min + 21262) % 42524;

const sec_calc = function (alfa) {
	let beta = Math.round( Math.abs(lua.angle) % 180/1.8);
	if (alfa >= 180) { 
		mare=0; 
		return beta;
	} 
	else if (alfa < 180) { 
		mare=1
		return 100-beta;
	}
	else {alert('error')}
};

const moon = function () {
	var lumus = sec_calc(lua.angle);
	var mooncx = parseFloat(sombra.getAttributeNS(null, 'cx'));
	showluz.innerHTML=lumus;
	sombra.setAttributeNS(null, 'cx', sombrapos());
	nmLabel.innerHTML = Calcs.daysFromMin(NewMoon()) + ' days,' + Calcs.hoursFromMin(NewMoon()) + ' hours';
	requestAnimationFrame (moon);
	lua.update();
}
moon();
