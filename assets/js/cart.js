var cart = JSON.parse(sessionStorage.getItem("cart")); 

var html = "<div>"+ cart[0] +"</div>";

$("body").append(html);