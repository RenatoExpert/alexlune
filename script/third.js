TiDi = document.getElementById('localtime');

const displayTime = function () {
	var horario = new Date(Date.UTC(96, 1, 2, Calcs.hoursFromMin(min)+18, Calcs.pureMin(min) ));
	TiDi.innerHTML = horario.toLocaleString('sv');
	requestAnimationFrame(displayTime);
}
displayTime();
