$(".bracelet").on("click",function() {
	sessionStorage.setItem("product","bracelet");
	console.log(sessionStorage);
});

$(".locket").on("click",function() {
	sessionStorage.setItem("product","locket");
	console.log(sessionStorage);
});

$(".ring").on("click",function() {
	sessionStorage.setItem("product","ring");
	console.log(sessionStorage);
});

$(".cuff").on("click",function() {
	sessionStorage.setItem("product","cufflinks");
	console.log(sessionStorage);
});

