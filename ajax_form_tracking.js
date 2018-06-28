toastr.success('Thank you for signing up.');
toastr.error('An error occured. Please try again later.');


$(document).on('DOMNodeInserted', '.toast-success', function(e) {
  console.log("Formulario enviado")
});


$(document).on('DOMNodeInserted', '.toast-success', function(e) {
  console.log("Formulario enviado")

  //Evento
  dataLayer.push({
    event:'gaevent',
    eventCategory:'Conversion',
    eventAction: 'Contactar',
    eventLabel: ''});

  //Página virtual
  dataLayer.push({
    'event':'virtualPage',
    'page': '/formulario_enviado',
    'pageTitle': 'Gracias por registrarte'
  });

});
