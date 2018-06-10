$(".simple").on("click",function() {
	sessionStorage.setItem("productType","simple");
	console.log(sessionStorage);
});

$(".infinity").on("click",function() {
	sessionStorage.setItem("productType","infinity");
	console.log(sessionStorage);
})

$(".calligraphy").on("click",function() {
	sessionStorage.setItem("productType","calligraphy");
	console.log(sessionStorage);
})

window.onload = function(){
	var prices = JSON.parse(sessionStorage.getItem("prices"));
	$(".simple span").html(prices.simpleRing);
	$(".simple span:nth-of-type(2)").html(prices.simpleRing+100);
	$(".calligraphy span").html(prices.calligraphyRing);
	$(".infinity span").html(prices.infinityRing);
};