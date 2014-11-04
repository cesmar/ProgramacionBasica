var c,t,b;

function inicio()
{
	c = document.getElementById("caja");
	t = document.getElementById("alejandra");
	b = document.getElementById("botoncito");

	b.addEventListener("click", calcular);
}

function calcular () 
{
	var numero = Number(t.value);
	var calculo = 1;
	var n;

	for(n=1; n<=numero; n++)
	{
		calculo = calculo * n;
	}
	c.innerHTML = "<strong>" + calculo + "</strong>";
}

