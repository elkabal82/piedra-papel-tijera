//Codigo para el juego de piedra papel o tijereas
function inicio (){
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

//declaramos las variables 
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["piedra", "papel", "tijeras"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
//depues del prompt no se deja ESPACIO ente el prompt y el parentesis
//y despues del \n no dejar espacio
//Guardamos en opcionUsuario, lo que el usuario elijio
opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
//alert("Elegiste " + opciones[opcionUsuario]);
htmlOpcionUsuario.innerHTML = opciones[opcionUsuario];
//alert("JavaScript eligio " + opciones[opcionMaquina] )
htmlOpcionMaquina.innerHTML = opciones[opcionMaquina];
//si el usuario elije piedra, entra aquí
if (opcionUsuario == piedra)
{
	if (opcionMaquina == piedra)
	{
		htmlResultado.innerHTML = ("Empate");
	}
	else if (opcionMaquina == papel)
	{
		htmlResultado.innerHTML = ("Perdiste");
	}
	else if (opcionMaquina == tijera)
	{
		htmlResultado.innerHTML = ("Ganaste");
	}
}
//si el usuario elije papel entra aquí
else if (opcionUsuario == papel)
{
	if (opcionMaquina == piedra)
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == papel)
	{
		alert("Empate");
	}
	else if (opcionMaquina == tijera)
	{
		alert("Perdiste");
	}
}
//si el usuario elije tijeras entra aquí
else if (opcionUsuario == tijera)
{
	if (opcionMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if (opcionMaquina == papel)
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == tijera)
	{
		alert("Empate");
	}
}
//si escoje una opcion que no es valida como un numero mayor de 3 entra aquí
else
{
	alert("Esa opcion no existe");
}
}