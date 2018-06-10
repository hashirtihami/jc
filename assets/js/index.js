function openNav() {
    document.getElementById("myNavz").style.height = "100%";
}

window.onload = function () {
	getData();
	openNav();
};

function closeNav() {
	sessionStorage.setItem("country",$("#country").val());
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

function getData(){
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbyajDmuMTssEFyfjd66hergSvqFkdyIzkVtjLx_yU17Dn4KYNg/exec",
		success: function(data) {
			var prices = new Object();
			for(var i=0;i<data.length;i++){
					prices[data[i][0]]=data[i][1];
			}
			sessionStorage.setItem("prices",JSON.stringify(prices));
		}
	})
} 
