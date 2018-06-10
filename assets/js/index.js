function openNav() {
    document.getElementById("myNavz").style.height = "100%";
}

window.onload = openNav;

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

gapi.client.sheets.spreadsheets.values.get({
  spreadsheetId: spreadsheetId,
  range: range
}).then((response) => {
  var result = response.result;
  var numRows = result.values ? result.values.length : 0;
  console.log(`${numRows} rows retrieved.`);
});
