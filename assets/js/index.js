$(".bracelet").on("click",function() {
	sessionStorage.setItem("product","bracelet");
});

$(".locket").on("click",function() {
	sessionStorage.setItem("product","locket");
});

$(".ring").on("click",function() {
	sessionStorage.setItem("product","ring");
});

$(".cuff").on("click",function() {
	sessionStorage.setItem("product","cufflinks");
});

console.log(sessionStorage);