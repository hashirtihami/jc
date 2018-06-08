$(".simple").on("click",function() {
	localStorage.setItem("productType","simple");
	console.log(localStorage);
});

$(".heart").on("click",function() {
	localStorage.setItem("productType","heart");
	console.log(localStorage);
});

