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

$(".zodiac").on("click",function() {
	sessionStorage.setItem("productType","zodiac");
	console.log(sessionStorage);
})

$(".container").fadeIn("slow",function(){
});