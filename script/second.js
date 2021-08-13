var showluz = document.getElementById('lumus');
var sombra = document.getElementById('sombra');
var nmLabel = document.getElementById('newmoon');
var mare = 0;

const sombrapos = () => (moonang/1.8)-25;
const NewMoon = () => (min + 21262) % 42524;

const sec_calc = function (alfa) {
	let beta = Math.round( Math.abs(moonang) % 180/1.8);
	if (alfa >= 180) { return beta; mare=0 } 
		else if (alfa < 180) { return 100-beta; mare=1 }
		else {alert('error')}
};

const moon = function () {
	var lumus = sec_calc(moonang);
	var mooncx = parseFloat(sombra.getAttributeNS(null, 'cx'));
	showluz.innerHTML=lumus;
	sombra.setAttributeNS(null, 'cx', sombrapos());
	nmLabel.innerHTML = daysFromMin(NewMoon()) + ' days,' + hoursFromMin(NewMoon()) + ' hours';
	requestAnimationFrame (moon);
}
moon();
