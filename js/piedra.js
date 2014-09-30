//Genera un número aleatorio entre un rango de números
function patito(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = patito(0, 2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == 0)
{
	//alert("Elegiste Piedra");
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste :(");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}
else if(opcionUsuario == 1)
{
	//alert("Elegiste Papel");
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste :(");
	}
}
else if(opcionUsuario == 2)
{
	//alert("Elegiste Tijera");
	if(opcionMaquina == piedra)
	{
		alert("Perdiste :(");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}
else
{
	alert("¿Pos qué carajo?");
}
