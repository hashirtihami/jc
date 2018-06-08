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