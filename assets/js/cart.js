window.onload = function(){
	var intRates = JSON.parse(sessionStorage.getItem("intRates"));
	$("#wait").fadeOut(1000,function(){
		$(".itemContainer").fadeIn(2000,function(){});
	})
	if(cart.length!==0){
		for (var key in cart) {
		    if (cart.hasOwnProperty(key)) {
		    	if(cart[key].country!=='pakistan'){
		    		if(!cart[key].shippingAdded){
			    		var country = cart[key].country;
			    		cart[key].price = cart[key].price+intRates[country];
			    		cart[key].shippingAdded = true;
			    		}
			    	$("h6 span").html("Shipping Charges "+intRates[country]+" PKR per item");
		    	}
		    	if(cart[key].productType!=='Zodiac'){
			    	if(cart[key].nameType!=='sname'){
			    		cart[key].price += 100;
			    		$("#nameType").html("<span>Double Name charges: 100 PKR per item</span>");
			    		console.log(cart);
			    	}
			    }
		    	if(cart[key].nameLanguage!=='english'){
		    		cart[key].price += 100;
		    		$("#language").html("<span>"+ cart[key].nameLanguage.toUpperCase() +" language charges: 100 PKR per item</span>");
		    	}
		    	total += cart[key].price;
				var html = "";
		        /*html += "<li class='item'><h4>"+ cart[key].product.toUpperCase() +"</h4>"+
		        		"<table><tr><td>Product Type</td><td>Plating Type</td><td>Name Type</td><td>Name On Product</td><td>Language</td><td>Price</td><td>Country</td><td>ID</td></tr>"+ 
		        		"<tr><td>"+cart[key].productType.toUpperCase() +"</td><td>"+ cart[key].platingType.toUpperCase() +"</td><td>"+ cart[key].nameType.toUpperCase() +
		        		"</td><td>"+ cart[key].nameOnProduct.toUpperCase() +"</td>"+"<td>"+ cart[key].nameLanguage.toUpperCase() +"</td><td>price</td><td>"+
		        		 cart[key].country.toUpperCase() +"</td><td>"+ cart[key].idVar +"</td></tr></table><span><i class='fa fa-trash'></i></span></li>";*/
		        html += "<div class='imgdiv col-lg-3 col-md-6 col-sm-12 col-xs-12'><div class='img-thumbnail'>"+
		            	"<img src='images/index/"+cart[key].product+".jpeg' class='image' style='width:100%''><div class='desc'>"+cart[key].productType+
		            	" "+cart[key].product+"<div class='desc'>"+"Name: "+cart[key].nameOnProduct+"</div><div class='desc'>"+"Price: "+cart[key].price+"</div><div class='desc'>"+
		            	"Name Language: "+cart[key].nameLanguage.toUpperCase()+"</div></div><span><i class='fa fa-trash'></i></span>"+"<span class='id'>"+cart[key].idVar+"</span></div>";

				$(".row").append(html);
				$("#total").html(total);
		    }
		}
	}
	else {
		$(".row").append("<p>Cart is empty</p>");
		$("p").addClass("empty");
	}	
}	

var jsonData = JSON.parse(localStorage.getItem("jsonData"));
var total = 0;
if(JSON.parse(sessionStorage.getItem("cart")))
	var cart = JSON.parse(sessionStorage.getItem("cart"));
else
	var cart = [];

for(var k in jsonData) cart[Object.keys(cart).length]=jsonData[k];
localStorage.clear();
sessionStorage.setItem("cart",JSON.stringify(cart));

$("div.items").on("click", "span", function(event){
	var index;
	var id = $(this).parent().children(".id").html();
	for(var i=0;i<cart.length;i++){
		if(cart[i].idVar===id)
			index = i;
	}
	total -= cart[index].price;
	cart.splice(index,1)
	sessionStorage.setItem("cart",JSON.stringify(cart));
	$(this).parent().parent().fadeOut(500,function(){
		$("#total").html(total);
		$(this).remove();
		if(cart.length===0){
			$(".row").append("<p>Cart is empty</p>");
			$("p").addClass("empty");
			$("h6").html("<span></span>")
		}
	});
	event.stopPropagation();
});

/*$("#checkout").on("click",function(e) {
	var serialNo;
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbxK7B1rZs2swnQl3hwJxnjjzYwhcZ3M6HEaipa7p4RZ-YSu2fnt/exec?req=JSON",
		success: function (data) {
			serialNo = JSON.parse(data).serialNo;
			for(var i=0;i<cart.length;i++){
				cart[i].serialNo = serialNo+i;
				$.ajax({
				    url: "https://script.google.com/macros/s/AKfycby0bS6wsX9aEcdKq5XvUUGWsGbopPNoAeOaw9rBYtiFf8q08YQ/exec",
				    method: "GET",
				    dataType: "json",
				    data: cart[i]
				});
			}
			console.log(cart);
		}
	});

});*/
