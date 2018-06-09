function openNav() {
    document.getElementById("myNavz").style.height = "100%";
}
window.onload = openNav;
function closeNav() {
    document.getElementById("myNavz").style.height = "0%";
}


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
	sessionStorage.setItem("productType","none");
	console.log(sessionStorage);
});

