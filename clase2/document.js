
function Pokemon (n, v, a) 
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function () 
	{
		alert(this.grito);
	}
}

function inicio()
{
	var rattata =  new Pokemon("Rattata", 40, 2);
	rattata.vida = rattata.vida - 13;
	nombrePokemon.textContent = rattata.nombre;
}


//DOCUMENT OBJECT MODEL

// navigator, window, document
// Math: es un objeto del navegador

//document.write("Hola mamá");
//var pi = 3.141582654;
//pi = Math.floor(pi);
//document.write(pi);

//var maxima;
//maxima = Math.max(5, 23, 4, 5, 12, 24, 23, 100);
//document.write(maxima);

//function mostrar (pos) 
//{
//	document.write(pos.coords.latitude + ", " + pos.coords.longitude);
//}

//navigator.geolocation.getCurrentPosition(mostrar);
