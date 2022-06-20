function suma{
	var a=document.getElementByID("a").value;
	var b=document.getElementByID("b").value;
	if(a=="" || b==""){
	document.getElementByID("wynik").innerHTML="Proszę podaj obie liczby";
	}
	else{
		a=parseFloat(a);
		b=parseFloat(b);
		
	var suma=a+b;
	document.getElementByID("wynik").innerHTML=suma;
	}
}

function roznica{
	var a=document.getElementByID("a").value;
	var b=document.getElementByID("b").value;
	if(a=="" || b==""){
	document.getElementByID("wynik").innerHTML="Proszę podaj obie liczby";
	}
	else{
		a=parseFloat(a);
		b=parseFloat(b);
		
	var suma=a-b;
	document.getElementByID("wynik").innerHTML=roznica;
	}
}

function mnozenie{
	var a=document.getElementByID("a").value;
	var b=document.getElementByID("b").value;
	if(a=="" || b==""){
	document.getElementByID("wynik").innerHTML="Proszę podaj obie liczby";
	}
	else{
		a=parseFloat(a);
		b=parseFloat(b);
		
	var suma=a*b;
	document.getElementByID("wynik").innerHTML=mnozenie;
	}
}

function dzielenie{
	var a=document.getElementByID("a").value;
	var b=document.getElementByID("b").value;
	if(a=="" || b==""){
	document.getElementByID("wynik").innerHTML="Proszę podaj obie liczby";
	}
	else{
		a=parseFloat(a);
		b=parseFloat(b);
		if(b=="0"){
			document.getElementByID("wynik").innerHTML="Nie dziel przez zero";
		}
		else{
		var suma=a/b;
		document.getElementByID("wynik").innerHTML=suma;
		}
	}
}