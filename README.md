# Programa-Experto-en-Implementacion-de-Herramientas-de-Analitica-y-Marketing-Digital

Recursos para las prácticas de implementación con Google Tag Manager.

### Medición de errores en campos de formularios

```
$(document).on('DOMNodeInserted', '.error', function(e) {

	console.log(e.target);

  //envía la información aquí al dataLayer

});
```


### Medición de formularios Ajax


**Simular envío del formulario**

```
toastr.success('Thank you for signing up.');
toastr.error('An error occured. Please try again later.');
```

**Detección de cambios en el DOM**

```
$(document).on('DOMNodeInserted', '.toast-success', function(e) {
  console.log("Formulario enviado")
});
```

**Obtención el campo del formulario**

```
element = e.target;
field = element.getAttribute('for');
```

### Detectar eventos de scroll

**Obtención del alto de la página**

```
$(document).height();
```

**Obtención de la posición vertical de la página**

```
$(window).scrollTop()
```

```
$(document).ready(function(){

	var height =
	var limit =

	$(window).on("scroll",function(){
		if( ){
			console.log('Has llegado a la mitad del documento');

		}
	});

});
```

**Cancelación del listener**

```
$(this).unbind("scroll");
```
