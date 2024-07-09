let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //almacenar los numeros ya sorteados para no volver a jugar con ellos 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) //parametros de la función generica y poder reutilizarla
{
    let elementoHTML = document.querySelector(elemento); //document es un puente que conecta javascript y html, y este es un objeto 
    elementoHTML.innerHTML = texto; //mostrar un titulo en la pagina web 
    return;
}

function verificarIntento() //Aqui declaramos la funcion y que vamos a hacer
{
    //input es la caja de texto de la pagina
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //no retorna el objeto, si no el valor  
    
    if (numeroSecreto == numeroDeUsuario)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else
    {
        //El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else
        {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = ''; //hace lo mismo de getElementById
}

function generarNumeroSecreto()
{
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; //una funcion siempre devuelve algo 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else 
    {
        //si el numero generado esta incluido en la lista, hacemos algo si no, no 
        if (listaNumerosSorteados.includes(numeroGenerado)) //verfificar si algo ya existe 
        {
            return generarNumeroSecreto();
        } else 
        {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego()
{
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numero aleatorio 
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();