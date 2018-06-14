if(JSON.parse(sessionStorage.getItem("cart"))){
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    console.log(cart);
    var total = 0;
    $("#name").html(cart[0].fullName);
    $("#email").html(cart[0].email);
    $("#orderID").html(cart[0].serialNo);
    $("#address").html(cart[0].address);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for(var i=0;i<cart.length;i++){
    	total += cart[i].price;
    	var item = "<tr><td>"+(i+1)+"</td><td>"+cart[i].product+"</td><td>"+cart[i].nameOnProduct+"</td><td>"+capitalizeFirstLetter(cart[i].platingType)+"</td><td>"+cart[i].price+"</td></tr>"
    	$("#summary").append(item);
    }

    $("#total").html(total);
    JsBarcode("#barcode", cart[0].idVar, {
    	displayValue: false
    });

    html2canvas(document.body).then(function(canvas) {
        var imgData = canvas.toDataURL("images/jpeg");
        var newData = imgData.replace(/^data:image\/jpeg/, "data:application/octet-stream");
        $("#download").attr("download", "receipt.jpeg").attr("href", newData);
        $("#download").on("click", function(){
        	setTimeout(function(){ window.location.assign("thankyou.html"); }, 100)
        });
    });
    localStorage.setItem("receipt",$(".container").html());
    sessionStorage.clear();
}
else {
    $(".container").html(localStorage.getItem("receipt"));
    html2canvas(document.body).then(function(canvas) {
        var imgData = canvas.toDataURL("images/jpeg");
        var newData = imgData.replace(/^data:image\/jpeg/, "data:application/octet-stream");
        $("#download").attr("download", "receipt.jpeg").attr("href", newData);
        $("#download").on("click", function(){
            setTimeout(function(){ window.location.assign("thankyou.html"); }, 100)
        });
    });
}