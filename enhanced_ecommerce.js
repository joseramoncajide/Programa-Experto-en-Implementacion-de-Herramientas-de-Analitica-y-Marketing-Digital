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
