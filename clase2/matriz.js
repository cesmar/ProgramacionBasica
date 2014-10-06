//var menu = ["Productos", "Ventas", "Contacto"];
//document.write(menu);

//var dofa = [ ["Fortaleza", "Oportunidad"], ["Debilidades", "Amenazas"] ];
//document.write(dofa[0][1]);

function explosion(){
	alert("BOOM!!");
	document.write("<h1>BOOM! Elegiste un área minada :(</h1>");
}

function ganaste () {
	document.write("Eres un ganador :)");
}

// 1 = Bomba, 0 = No hay bomba
var campo = [ [1, 0, 0],
			  [0, 1, 0],
			  [1, 0, 1] ];

//if (campo[1][1] == 1) {
//	explosion();
//}
//else{
//	ganaste();
//}

var textos = ["Cesped", "Bomba"];
var x, y;

alert("Estas en un campo minado\n" +
	"Elije una posición entre el 0  y el 2 para X  y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if(x<=2 && y<=2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if (posicion == 1)
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explosion();
}

