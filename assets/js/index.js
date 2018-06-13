function openNav() {
    document.getElementById("myNavz").style.height = "100%";
}

window.onload = function () {
	if(!sessionStorage.getItem("country")){
		openNav();
	}
	else {
		$(".container").fadeIn(1000,function(){
	    })
	}
};

function closeNav() {
	sessionStorage.setItem("country",$("#country").val());
    document.getElementById("myNavz").style.height = "0%";
    setTimeout(function(){ $("#myNavz").remove(); }, 500);
    $(".container").fadeIn(1000,function(){
    });
    $(".container").css("display","flex");
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

