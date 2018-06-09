var jsonData = JSON.parse(localStorage.getItem("jsonData"));

if(JSON.parse(sessionStorage.getItem("cart")))
	var cart = JSON.parse(sessionStorage.getItem("cart"));
else
	var cart = {};

for(var k in jsonData) cart[Object.keys(cart).length]=jsonData[k];
localStorage.clear();
sessionStorage.setItem("cart",JSON.stringify(cart));

for (var key in cart) {
    if (cart.hasOwnProperty(key)) {
		var html = "";
        html += "<div><h3>"+ cart[key].product +"</h3><p>"+ cart[key].productType +"</p><p>"+ cart[key].platingType +
				"</p><p>"+ cart[key].nameType +"</p><p>"+ cart[key].nameOnProduct +"</p><p>"+ cart[key].nameLanguage +
				"</p><p>price</p><p>"+ cart[key].country +"</p></div>";

		$("body").append(html);
    }
}

$("#checkout").on("click",function(e) {
	for (var key in cart) {
	    if (cart.hasOwnProperty(key)) {
			e.preventDefault();
		  	var jqxhr = $.ajax({
			    url: "https://script.google.com/macros/s/AKfycby0bS6wsX9aEcdKq5XvUUGWsGbopPNoAeOaw9rBYtiFf8q08YQ/exec",
			    method: "GET",
			    dataType: "json",
			    data: cart[key]
		    });
		}
	}
});