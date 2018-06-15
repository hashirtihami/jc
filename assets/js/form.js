var cart = [];
var price = JSON.parse(sessionStorage.getItem("prices"));
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function setup(){
	$(".maincon").fadeIn(1000,function () {
	});
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$.when(
    $.ajax({
		url: "https://script.google.com/macros/s/AKfycbyajDmuMTssEFyfjd66hergSvqFkdyIzkVtjLx_yU17Dn4KYNg/exec",
		success: function(data) {
			var prices = new Object();
			for(var i=0;i<data.length;i++){
					prices[data[i][0]]=data[i][1];
			}
			sessionStorage.setItem("prices",JSON.stringify(prices));
			console.log(prices);
			price = JSON.parse(sessionStorage.getItem("prices"));
		}
	}),
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbys0Zi7pHzAL_fPkkOFOUSaOm1tjma1PVPdtrHmk5U0MHQo6paI/exec",
		success: function(data) {
			var intRatesJSON = new Object();
			for(var i=0;i<data.length;i++){
					intRatesJSON[data[i][0]]=data[i][1];
			}
			sessionStorage.setItem("intRates",JSON.stringify(intRatesJSON));
			console.log(intRatesJSON);	
		}
	}))
.then(
	window.onload = function () {
		//getData();
		//getIntRates();
		$("#wait").fadeOut(1000,function(){
			setup();
		});
		if(sessionStorage.productType==='zodiac')
			$(".name").css("display","none").remove();
		else
			$(".zodiac").css("display","none").remove();
	}
);

$("#mainForm").on("submit",function(e){
	var product = new Object();
	product.product = capitalizeFirstLetter(sessionStorage.getItem("product"));
	product.productType = capitalizeFirstLetter(sessionStorage.getItem("productType"));
	product.platingType = $("#plating").val();
	product.nameType = $("#ntype").val();
	product.nameOnProduct = capitalizeFirstLetter($("#nameonp").val());
	if(sessionStorage.productType!=='zodiac')
		product.nameLanguage = $("#namelang").val();
	else
		product.nameLanguage = "english";
   	product.additionalInstruction = $("#ins").val();
   	product.country = sessionStorage.getItem("country");
   	product.idVar = ID();
   	var priceVar = sessionStorage.getItem("productType")+product.product;
   	product.price = price[priceVar];
   	cart.push(product);
   	localStorage.setItem("jsonData",JSON.stringify(cart));
});


/*if(productTypee="zodiac")
document.getElementById("nameorzodiac").innerHTML= "Your Zodiac Sign:"
else
document.getElementById("nameorzodiac").innerHTML= "Name on Product:"*/
