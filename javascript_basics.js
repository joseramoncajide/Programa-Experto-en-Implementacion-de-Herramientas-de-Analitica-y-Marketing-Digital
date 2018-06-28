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



/************************ dataLayer *****************************/

dataLayer = [];

var dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

dataLayer.push("Hola Mundo")

dataLayer.push({
  "texto": "Hola Mundo"
})

dataLayer[0]["prueba"]

// Eventos

dataLayer.push({
  "event": "evento_de_prueba"
  "texto": "Hola Mundo"
})
