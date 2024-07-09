//Ejercicio #1
/*
let calculo = 0;
function calcularIndiceMasaCorporal(altura,peso)
{
    calculo = peso/Math.pow(altura,2);
    console.log(`El IMC es de ${calculo}`);
    return;
    
}
calcularIndiceMasaCorporal(1.70,40) */

//Ejercicio #2
//Lo saque del foro porque no lograba hacerlo 
/*
function valorFactorial(valor, valFacto ,contador) {
    valFacto = 1
    contador = 1;
    valor = prompt("Ingrese un valor");
    while(contador<valor){
        contador++;
        valFacto = valFacto * contador; 
    }
    console.log(`El valor factorial de ${valor} es ${valFacto}`);
}
valorFactorial(); */


//Ejercicio #3
/*
function convertidorReales(numero)
{
    numero = prompt('ingrese el monto a convertir');
    calculo = numero * 4.80;
    return alert(`Los ${numero} dolares, equivalen a ${calculo} reales`);
}
convertidorReales(); */

//Ejercicio #4 
/*
function dimensionesSala(altura,anchura)
{
    altura = prompt('Que altura tiene la sala?');
    anchura = prompt('Cual es el ancho de la sala?');
    perimetro = altura * 2 + anchura * 2;
    area = altura * anchura;
    resultado = alert(`El perimetro de la sala es ${perimetro} m y su area es ${area} m2`);
}
dimensionesSala(); */

//Ejercicio #5
/*
function dimensionesSalaCircular(radio)
{
    radio = prompt('Que radio tiene la sala circular?');
    perimetro = 2 * 3.14 * radio;
    area = 3.14 * Math.pow(radio,2);
    return alert(`El perimetro de la sala es ${perimetro} m y su area es ${area} m2`);
}
dimensionesSalaCircular(); */

//Ejercicio #6
//tambien lo saque de la ayuda, la logica la tenia, pero esta mejor optimizado :)
function tablaDeMultiplicar(numero)
{
    numero = prompt('Ingrese el numero para ver su tabla de multiplos');
    for (var i=1; i<=10; i++) //ciclo repetivivo de 1 a 10
    {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
tablaDeMultiplicar();