var cart = JSON.parse(sessionStorage.getItem("cart"));

function openNav() {
    document.getElementById("myNavz").style.height = "100%";
}

window.onload = openNav;

$("#submitButton").on("click",function(e) {
	var serialNo;
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbxK7B1rZs2swnQl3hwJxnjjzYwhcZ3M6HEaipa7p4RZ-YSu2fnt/exec?req=JSON",
		success: function (data) {
			serialNo = JSON.parse(data).serialNo;
			console.log(serialNo);
			for(var i=0;i<cart.length;i++){
				cart[i].serialNo = serialNo+i;
				cart[i].fullName = $("#name").val();
				cart[i].address = $("#address").val();
				cart[i].city = $("#city").val();
				cart[i].contactNo = $("#cno").val();
				cart[i].email = $("#email").val();
				$.ajax({
				    url: "https://script.google.com/macros/s/AKfycby0bS6wsX9aEcdKq5XvUUGWsGbopPNoAeOaw9rBYtiFf8q08YQ/exec",
				    method: "GET",
				    dataType: "json",
				    data: cart[i]
				});
			}
			console.log(cart[i-1].serialNo);
			$.ajax({
				url: "https://script.google.com/macros/s/AKfycbxK7B1rZs2swnQl3hwJxnjjzYwhcZ3M6HEaipa7p4RZ-YSu2fnt/exec",
				method: "GET",
				dataType: "json",
				data: cart[i-1]
			})
		}
	});

	$(".form").fadeOut(2000,function(){
		window.location.assign("thankyou.html");
	});
});