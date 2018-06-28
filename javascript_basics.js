/************************ SELECTORES ***************************/

//document.querySelector devuelve el primer elemento coincidente con el selector especificado.

//Distintas formas de acceder al mismo elemento del DOM. Ej. <a id="register" href="" class="btn btn-secondary animated bounceIn visible" target="…

document.querySelector(".btn");

document.querySelector("a.btn");

document.querySelector("#register");

document.querySelector(".list-inline li>a");

//Si hay varios elmentos con los mismo selectores
document.querySelectorAll(".btn")

//El resultado devuelve un array y cada elemento tiene una índice numérico: [0,1,2,…]
// Para acceder al primer elemento:
document.querySelectorAll(".btn")[0]

//Por lo tanto
document.querySelector(".btn") == document.querySelectorAll(".btn")[0]

/************************ REGISTER ***************************/

var element = document.getElementById('register');

function clickEnBoton() {
  var textoBoton = this.innerText;
  alert('Click en '+ textoBoton );
}

// Listener
element.addEventListener('click', clickEnBoton);


/*JQuery*/

$(".btn")[0]
$(".btn")[0].innerHTML


$(".btn").mouseover(function() {
  console.log($(".btn")[0].innerHTML)
  })


$(".btn").mouseover(function() {
  console.log(this.innerHTML)
})

$(".btn").mouseover(function() {
  console.log($(this).html())
})

var index = $(".btn").index(this);

/************************ Enhanced Ecommerce ***********************/

document.querySelectorAll('[data-product-id]')
$('[data-product-id]')


// Programación de funciones

function foo(txt) {
  console.log(txt)
}

// Funciones anónimas

(function(){
  console.log("Me he ejecutado")
});


(function(){

  $('[data-product-id]').each(function(){

    alert($(this).attr("data-product-name"));

  });
})();


(function(){

  var products = [];

  $('[data-product-id]').each(function(){

    //alert($(this).attr("data-product-name"));

    products.push({
      'name': $(this).attr("data-product-name"),
      'id': $(this).attr("data-product-id")
    })

  });

	var ecommerceData = {
	  	//'event': 'evento_ecommerce',
		    'ecommerce' : {
		        'currencyCode' : 'EUR',
  		      'impressions': products
		    }
	  };

	  dataLayer.push(ecommerceData);

})();
