var cart = JSON.parse(sessionStorage.getItem("cart")); 

console.log(cart);

for (var key in cart) {
    if (cart.hasOwnProperty(key)) {
        var html = "<div><h1>Cart</h1></div><div><h3>"+ cart[key].product +"</h3><p>"+ cart[key].productType +"</p><p>"+ cart[key].platingType +
				"</p><p>"+ cart[key].nameType +"</p><p>"+ cart[key].nameOnProduct +"</p><p>"+ cart[key].nameLanguage +"</p><p>price</p></div>";

		$("body").append(html);
    }
}