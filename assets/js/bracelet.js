$(".simple").on("click",function() {
	sessionStorage.setItem("productType","simple");
});

$(".heart").on("click",function() {
	sessionStorage.setItem("productType","heart");
});

console.log(sessionStorage);