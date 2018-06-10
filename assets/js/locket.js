$(".simple").on("click",function() {
	sessionStorage.setItem("productType","simple");
	console.log(sessionStorage);
});

$(".heart").on("click",function() {
	sessionStorage.setItem("productType","heart");
	console.log(sessionStorage);
});

$(".fancy").on("click",function() {
	sessionStorage.setItem("productType","fancy");
	console.log(sessionStorage);
});

$(".infinity").on("click",function() {
	sessionStorage.setItem("productType","infinity");
	console.log(sessionStorage);
})

$(".pearl").on("click",function() {
	sessionStorage.setItem("productType","pearl");
	console.log(sessionStorage);
})

window.onload = function(){
	var prices = JSON.parse(sessionStorage.getItem("prices"));
	$(".simple span").html(prices.simpleLocket);
	$(".heart span").html(prices.heartLocket);
	$(".fancy span").html(prices.fancyLocket);
	$(".infinity span").html(prices.infinityLocket);
	$(".pearl span").html(prices.pearlLocket);
};
