
$(document).ready(function(){

	var height = $(document).height();
	var limit = height/2;

	$(window).on("scroll",function(){
		if($(window).scrollTop()>limit){
			console.log('Has llegado a la mitad del documento');
			$(this).unbind("scroll");
		}
	});

});
