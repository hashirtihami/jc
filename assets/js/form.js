var cart = [];

//function to fill form data in products object
function submitFunction() {

	var product = new Object();
	product.product = sessionStorage.product;
	product.productType = sessionStorage.productType;
	product.platingType = $("#plating").val();
	product.nameType = $("#ntype").val();
	product.nameOnProduct = $("#nameonp").val();
	product.nameLanguage = $("#namelang").val();
   	product.additionalInstruction = $("#ins").val();

   	cart.push(product);
   	localStorage.setItem("jsonData",JSON.stringify(cart));
}

//window.onclose = localStorage.clear();

/*var additional = 250;

var prices = new object();
prices.simpleLocket = 1500;
prices.fancyLocketSingle = 1600;
prices.prices.pearlLocketSingle = 1600;
prices.heartLocketSingle = 1600;
prices.infinityLocket = 1700;
prices.simpleRing= 1200;
prices.calligraphyRing= 1400;
prices.infinityRing= 1500;
prices.cufflinks = 1600;

var charges = new object();
 charges.us = 1930;
 charges.canada= 1930;
 charges.uk = 1680;
 charges.saudia = 3805;
 charges.india = 3915;
 charges.bangla = 3915;
 charges.australia = 2350;
 charges.austria = 2853;
 charges.belgium = 2182;
 charges.bhutan = 2182;
 charges.botswana = 2520;
 charges.brunei = 2350;
 charges.bulgaria = 2265;
 charges.cambodia = 2685;
 charges.canaryIsland =3189;
 charges.channelIslands =2349;
 charges.china = 2349;
 charges.cyprus = 2517;
 charges.czechRepublic = 2685;
 charges.denmark = 2685;
 charges.egypt = 2349;
 charges.ethiopia = 4700;
 charges.finland = 2685;
 charges.france = 2265;
 charges.germany = 2182;
 charges.greece = 2182;
 charges.hong Kong = 1678;
 charges.hungary = 2349;	
 charges.indonesia = 2098;
 charges.iran = 2349;
 charges.ireland = 2433
 charges.italy = 2182;
 charges.japan = 3357
 charges.jordan = 2350;
 charges.kenya 	= 2182;
 charges.korea = 3357;
 charges.laos =	3357;
 charges.lebanon = 2014;
 charges.lesotho = 4699;
 charges.luxembourg = 2182;
 charges.macau = 2014;
 charges.madeira = 3189;
 charges.azores = 3189;
 charges.malawi = 4700;
 charges.malaysia =	2098;
 charges.maldives =	2182;
 charges.mauritius = 4699;
 charges.mozambique = 4699;
 charges.myanmar = 2349;
 charges.namibia = 4699;
 charges.nepal = 1678;
 charges.netherlands = 2098;
 charges.newZealand = 3021;
 charges.northernCyprus =3357;
 charges.northernIreland = 2182;
 charges.norway = 3189;
 charges.philippines = 2098;
 charges.poland = 2685;
 charges.portugal =	2265;
 charges.others = 7217;
 charges.romania = 2349.902;
 charges.scotland =	2182;
 charges.singapore = 1678;
 charges.slovakia =	2685;
 charges.southAfrica =	2182;
 charges.spain = 2182;
 charges.sri Lanka = 1342;
 charges.swaziland = 4699;
 charges.sweden = 2685;
 charges.switzerland = 2685;
 charges.syria = 2014;
 charges.toaiwan = 2098;*/

