$(document).ready(function(){
	$("#kosar_btn_tok").click(function(){
		document.getElementById("rendeles_szoveg").innerHTML = "A következő termék a kosárba került: " + document.getElementById("telefon").value + " " + document.getElementById("tok").value + ", színe: " + document.getElementById("color").value;
		$(".rendeles").show();
	});
	$("#kosar_btn_polo").click(function(){
		document.getElementById("rendeles_szoveg").innerHTML = "A következő termék a kosárba került: " + document.getElementById("polo").value + ", mérete: " + document.getElementById("meret").value + ", színe: " + document.getElementById("color").value;
		$(".rendeles").show();
	});
	$('input[type=radio][name=szallitas]').change(function(){
		if (this.value == 'szemelyes'){
			$("#szallitas").hide();
		}
		else if (this.value == 'futar'){
			$("#szallitas").show();
		}
	});
	
	$("#rendeles").click(function(){
		document.getElementById("vezeteknev_label").innerHTML = "Vezetéknév:";
		document.getElementById("keresztnev_label").innerHTML = "Keresztnév:";
		document.getElementById("email_label").innerHTML = "Email:";
		document.getElementById("irszam_label").innerHTML = "Irányítószám:";
		document.getElementById("varos_label").innerHTML = "Város:";
		document.getElementById("cim_label").innerHTML = "Cím:";
		document.getElementById("datum_label").innerHTML = "Szállítási dátum:";
		if (document.getElementById("vezeteknev").value == ""){
			document.getElementById("vezeteknev_label").innerHTML += " <span>A vezetéknév hiányzik.</span>";
			$("#vezeteknev").css('border', '3px solid red');
		}else{
			$("#vezeteknev").css('border', '0px');
		}
		if (document.getElementById("keresztnev").value == ""){
			document.getElementById("keresztnev_label").innerHTML += " <span>A keresztnév hiányzik.</span>";
			$("#keresztnev").css('border', '3px solid red');
		}else{
			$("#keresztnev").css('border', '0px');
		}
		if (document.getElementById("email").value == ""){
			document.getElementById("email_label").innerHTML += " <span>Az email hiányzik.</span>";
			$("#email").css('border', '3px solid red');
		}else{
			$("#email").css('border', '0px');
		}
		if (document.getElementById("irszam").value == ""){
			document.getElementById("irszam_label").innerHTML += " <span>Az irányítószám hiányzik.</span>";
			$("#irszam").css('border', '3px solid red');
		}else{
			$("#irszam").css('border', '0px');
		}
		if (document.getElementById("varos").value == ""){
			document.getElementById("varos_label").innerHTML += " <span>A város hiányzik.</span>";
			$("#varos").css('border', '3px solid red');
		}else{
			$("#varos").css('border', '0px');
		}
		if (document.getElementById("cim").value == ""){
			document.getElementById("cim_label").innerHTML += " <span>A cím hiányzik.</span>";
			$("#cim").css('border', '3px solid red');
		}else{
			$("#cim").css('border', '0px');
		}
		if (document.getElementById("datum").value == ""){
			document.getElementById("datum_label").innerHTML += " <span>A dátum hiányzik.</span>";
			$("#datum").css('border', '3px solid red');
		}else{
			$("#datum").css('border', '0px');
		}
	});
});