//alert("Hola mamá, ya sé programar!!!");

var peso;
var pesoEnMarte;

//alert("¿Quieres saber tu peso en Marte?");

//var pregunta = confirm("¿Quieres saber tu peso en Marte?");
if (confirm("¿Quieres saber tu peso en Marte?"))
{
	peso = prompt("¿Cuál es tu peso en kg?", "70");
	peso = parseInt(peso);

	pesoEnMarte = (peso / 9.81) * 3.711;

	alert("Tu peso en Marte es: " + pesoEnMarte + " kg.");
}
else
{
	alert("Adios.");
}