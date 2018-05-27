var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').on('click', searchCountries);

function searchCountries() {
		var countryName = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var countryClass = '.list-' + item.alpha2Code;
				$('<li>').addClass('list-' + item.alpha2Code).appendTo(countriesList);
				$('<p>').append('<img src="' + item.flag + '"></img>').appendTo(countryClass);
				$('<p class="country">').text(item.name).appendTo(countryClass);
				$('<p>').text('Capital: ' + item.capital).appendTo(countryClass);
				$('<p>').text('Population: ' + item.population).appendTo(countryClass);
				$('<p>').text('Area: ' + item.area + ' sq. km').appendTo(countryClass);
		});
}