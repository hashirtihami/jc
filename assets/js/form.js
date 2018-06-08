//function to fill form data in products object
function submitFunction() {

var products = new Object();
		products.platingType = document.getElementById("plating").value;
		products.nameType = document.getElementById("ntype").value;
		products.nameOnProduct = document.getElementById("nameonp").value;
		products.nameLanguage = document.getElementById("namelang").value;
   		products.additionalInstruction = document.getElementById("ins").value;     
}