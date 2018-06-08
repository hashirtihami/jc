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
				"</p><p>"+ cart[key].nameType +"</p><p>"+ cart[key].nameOnProduct +"</p><p>"+ cart[key].nameLanguage +"</p><p>price</p></div>";

		$("body").append(html);
    }
}
