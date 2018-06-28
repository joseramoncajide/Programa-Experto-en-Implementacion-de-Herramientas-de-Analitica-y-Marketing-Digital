$(document).on('DOMNodeInserted', '.error', function(e) {

	console.log(e.target);

  //envía la información aquí al dataLayer

});

$(document).on('DOMNodeInserted', '.error', function(e) {

	//console.log(e.target);

	element = e.target;

	field = element.getAttribute('for');

  dataLayer.push({
    'event':'gaEvent',
    'eventCategory':'Errores en formularios',
    'eventAction': 'Registro',
    'eventLabel': field + ':' + element.textContent
  });

});
