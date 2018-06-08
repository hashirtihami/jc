var cart = [];

//function to fill form data in products object
function submitFunction() {

	var product = new Object();
	product.product = sessionStorage.product;
	product.productType = sessionStorage.productType;
	product.platingType = $("#plating").val();
	product.nameType = $("#ntype").val();
	product.nameOnProduct = $("#nameonp").val();
	product.nameLanguage = $("#namelang").val();
   	product.additionalInstruction = $("#ins").val();

   	cart.push(product);
   	sessionStorage.setItem("cart",JSON.stringify(cart));
}

