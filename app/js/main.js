var currentYear = document.querySelector('.input'),
	btn = document.querySelector('.btn'),
	currentCentury,
	result = document.querySelector('.result');

btn.disabled = true;

currentYear.addEventListener('change', function() {
	if (currentYear.value == "") {
		btn.disabled = true;
	} else {
		btn.disabled = false;
	}
});

btn.addEventListener('click', function() {
	currentCentury = Math.ceil(currentYear.value / 100),
	result.textContent = 'Сейчас ' + currentCentury + ' век';
});