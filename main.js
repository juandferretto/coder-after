
/* function soyUnaFuncion(){
    console.log("Soy una función");
    funcionAnonima();
}



const funcionAnonima = function(){
    console.log("Soy una función anónima");
}

const funcionFlecha = () => {
    console.log("Soy una función flecha");
} */


/* const sumar = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return resultado;
}

const num1 = Number(prompt("Primer num"));
const num2 = Number(prompt("Segundo num"));


console.log(sumar(resultado, 10) + 10); */


/* function verScope() {
    

    if(1 == 1){
        let numero = 10;



    }

    console.log(numero)

}

verScope(); */

/* 

 -Pedir al usuario: Nombre, apellido, cantidad de hijos.
 -Darle la bienvenida, concatenando nombre y apellido.
 -Crear una función que pida los nombres de los hijos
 -Pedir nombre y edad de los hijos, por cada uno
 - Mediante otraa funcion, verificar que sea mayor o no.
*/

/* const pedirDatos = () => {

    const nombre = prompt("Cuál es tu nombre?");
    const apellido = prompt("Cuál es tu apellido?");
    const cantidadHijos = Number(prompt("Cantidad de hijos"));

    alert(`Hola, bienvenido/a ${nombre} ${apellido}`);

    if(!isNaN(cantidadHijos)){
        consultarNombres(cantidadHijos);
    }


}

const consultarNombres = (cantidad) => {

    for(let i = 1; i <= cantidad; i++){
        const nombreHijo = prompt("Nombre de tu hijo " + i);
        const edadHijo = Number(prompt("Cuál es la edad de tu hijo " + nombreHijo));
        verificarEdad(edadHijo, nombreHijo);
    }


}

const verificarEdad = (edad, nombre) => {

    if(edad < 18){
        alert("Sos menor de edad " + nombre);
    }else{
        alert("Sos mayor de edad " + nombre);
    }

}

pedirDatos(); */

let numeroRep = Number(prompt("Cuántas veces queres que se repita la operación?"));

let numero1 =  Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Elija el numero a sumar"));

let acumulador = 1;
let resultado = 0;

while(acumulador <= numeroRep){
    
    
    resultado += numero1 + numero2;
    
    if(acumulador < numeroRep){
        numero1 =  Number(prompt("Ingrese otro numero"));
        numero2 = Number(prompt("Elija otro numero para sumar"));
    }
    
    acumulador++;
}

console.log(resultado);