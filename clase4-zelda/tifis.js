var tablero, direccion;

var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	velocidad: 50
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
};

function inicio()
{
	//alert(typeof(blockUp.x1));

	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();	//objeto interno de los navegadores
	//console.log(fondo);
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	
	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}

function dibujar()
{
	//Capa 1: Fondo
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	//Capa 2: Liz
	if (liz.lizOK)
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
	//Capa 3: Tifis
	var tifiDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK) 
	{
		//tablero.drawImage(tifis.frente, tifis.x, tifis.y);

		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}
		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
}

function teclado(datos)
{
	//Guardo en "codigo" el numero de la tecla oprimida
	var codigo = datos.keyCode;

	if(codigo == teclas.UP && validarBorde(codigo) && validarBloqueoArriba(codigo))
	{
		tifis.y -= tifis.velocidad;
	}
	else if(codigo == teclas.DOWN && validarBorde(codigo) && validarBloqueoAbajo(codigo))
	{
		tifis.y += tifis.velocidad;

		//if (tifis.y < 300 && tifis.x < 100) 
		//{
		//	tifis.y += tifis.velocidad;
		//}
	}
	else if(codigo == teclas.RIGHT && validarBorde(codigo) && validarBloqueoDerecha(codigo))
	{
		tifis.x += tifis.velocidad;
	}
	else if(codigo == teclas.LEFT && validarBorde(codigo) && validarBloqueoIzquierda(codigo))
	{
		tifis.x -= tifis.velocidad;
	}

	direccion = codigo;
	dibujar();

	console.log("x: " + tifis.x + "; y: " + tifis.y);
}


//CODIGO CARLOS ESPINO MARAVÍ
function validarBorde(tecla)
{
	if(tecla == teclas.UP && tifis.y == 0)
	{
		return false;
	}
	else if(tecla == teclas.DOWN && tifis.y == 450)
	{
		return false;
	}
	else if(tecla == teclas.RIGHT && tifis.x == 450)
	{
		return false;
	}
	else if(tecla == teclas.LEFT && tifis.x == 0)
	{
		return false;
	}
	return true;
}

var blockUp = {
	x1: [0, 50, 100, 200],
	y1: 250,
	x2: [150, 200, 250, 300, 350, 400, 450],
	y2: 400
};

function validarBloqueoArriba(tecla)
{
	if(tecla == teclas.UP && tifis.y == blockUp.y1)
	{
		for (var i = 0; i <= blockUp.x1.length-1; i++) {
			if(tifis.x == blockUp.x1[i])
			{
				return false;
			}
		};
	}
	else if(tecla == teclas.UP && tifis.y == blockUp.y2)
	{
		for (var i = 0; i <= blockUp.x2.length-1; i++) {
			if(tifis.x == blockUp.x2[i])
			{
				return false;
			}
		};
	}
	return true;
}

var blockDown = {
	x1: [0, 50, 100],
	y1: 150,
	x2: [150, 200, 250, 300, 350, 400, 450],
	y2: 300
};

function validarBloqueoAbajo(tecla)
{
	if(tecla == teclas.DOWN && tifis.y == blockDown.y1)
	{
		for(var i = 0; i<= blockDown.x1.length-1; i++)
		{
			if(tifis.x == blockDown.x1[i])
			{
				return false;
			}
		}
	}
	else if(tecla == teclas.DOWN && tifis.y == blockDown.y2)
	{
		for(var i = 0; i<= blockDown.x2.length-1; i++)
		{
			if(tifis.x == blockDown.x2[i])
			{
				return false;
			}
		}
	}
	return true;
}

var blockRight = {
	x1: 150,
	y1: [0, 50, 100, 150, 200],
	x2: 100,
	y2: 350
};

function validarBloqueoDerecha(tecla)
{
	if(tecla == teclas.RIGHT && tifis.x == blockRight.x1)
	{
		for (var i = 0; i <= blockRight.y1.length-1; i++) {
			if(tifis.y == blockRight.y1[i])
			{
				return false;
			}
		};
	}
	else if(tecla == teclas.RIGHT && tifis.x == blockRight.x2 && tifis.y == blockRight.y2)
	{
		return false;
	}
	return true;
}

var blockLeft = {
	x1: 150,
	y1: 200,
	x2: 250,
	y2: [0, 50, 100, 150, 200]
};

function validarBloqueoIzquierda(tecla)
{
	if(tecla == teclas.LEFT && tifis.x == blockLeft.x1 && tifis.y == blockLeft.y1)
	{
		return false;
	}
	else if(tecla == teclas.LEFT && tifis.x == blockLeft.x2)
	{
		for(var i = 0; i<= blockLeft.y2.length-1; i++)
		{
			if(tifis.y == blockLeft.y2[i])
			{
				return false;
			}
		}
	}
	return true;
}
