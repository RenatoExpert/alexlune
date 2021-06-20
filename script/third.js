TiDi = document.getElementById('localtime');

const displayTime = function () {
	var horario = new Date(Date.UTC(96,1,2,hoursFromMin(min)+18,pureMin(min) ));
	TiDi.innerHTML = horario.getUTCHours() + ':' + horario.getUTCMinutes();
	requestAnimationFrame(displayTime);
}
displayTime();
