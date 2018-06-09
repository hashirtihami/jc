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
        html += "<li class='item'><img src='images/index/"+cart[key].product+".jpeg'><h4>"+ cart[key].product.toUpperCase() +"</h4>"+
        		"<table><tr><td>ProductType</td><td>PlatingType</td><td>NameType</td><td>NameOnProduct</td><td>Language</td><td>Price</td><td>Country</td></tr>"+ 
        		"<tr><td>"+cart[key].productType.toUpperCase() +"</td><td>"+ cart[key].platingType.toUpperCase() +"</td><td>"+ cart[key].nameType.toUpperCase() +
        		"</td><td>"+ cart[key].nameOnProduct.toUpperCase() +"</td>"+"<td>"+ cart[key].nameLanguage.toUpperCase() +"</td><td>price</td><td>"+
        		 cart[key].country.toUpperCase() +"</td></tr></table>";

		$("ul").append(html);
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