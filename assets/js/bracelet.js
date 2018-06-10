$(".simple").on("click",function() {
	sessionStorage.setItem("productType","simple");
	console.log(sessionStorage);
});

$(".heart").on("click",function() {
	sessionStorage.setItem("productType","heart");
	console.log(sessionStorage);
});
