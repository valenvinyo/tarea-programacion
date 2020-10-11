//1. Mediante un alert, mostrar un saludo de bienvenida ”Bienvenidos a mi sitio!”.

alert("¡Bienvenidos a mi sitio!")

//2. Usar un confirm para preguntarle al usuario si “está seguro de querer avanzar” almacenando el resultado en una variable.

let resultado = confirm("¿Está seguro de querer avanzar?")

//2a. Utilizando condicionales: en el caso de que NO quiera avanzar, debe modificarse una etiqueta h2 (creada previamente en el HTML) con el mensaje: “Lamentamos que no quieras continuar tu visita por este sitio increíble.” En este caso no debería seguir el flujo de la aplicación, es decir, ya no deberían ejecutarse el punto b, c y los que siguen

if (resultado == false) {
   let CartelFalso = document.querySelector("h2");
   CartelFalso.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble."
}

//2b. En el caso de que quiera continuar, mostrar en el h2 el mensaje “¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!”.

else{
    let CartelVerdadero = document.querySelector("h2");
   CartelVerdadero.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"
}

//2c. Ahora con un prompt, hacer que el usuario ingrese su nombre (tendrás qué guardar el nombre en una variable). 

let nombre = prompt("¿Cual es tu nombre?");
console.log (nombre);

//2d. Ahora con un prompt, hacer que el usuario ingrese su nombre (tendrás qué guardar el nombre en una variable). 

let bienvenido = document.querySelector ("h1");
bienvenido.innerHTML = "Bienvenido " + nombre

//2e. A través de un prompt, preguntar la edad al usuario. Si es mayor a 18, podrá continuar con el proceso.

let edad = prompt("¿Cual es tu edad?");
let body = document.querySelector ("body")
if (edad < 18){
    body.style.display= "none"
}

//2f. Por medio de un confirm preguntar al usuario si desea utilizar el “Modo oscuro”. Si el usuario confima, cambiar el color de fondo del sitio al color dimgray y el color de la tipografía deberá ser white.

let oscuro = confirm ("¿desea utilizar el modo oscuro?")
if (oscuro == true){
    body.style.backgroundColor= "dimgray"
    body.style.color= "white"
}

//3. Declará la variable diaDeSemana y asignale el valor "Domingo". Luego implementa un condicional usando un if que compare la igualdad de diaDeSemana con el día "Domingo" y si es verdadero que imprima por pantalla "¡Hoy es día de descanso!".

let diadesemana = "domingo"
if (diadesemana == "domingo") {
    body.innerHTML= "¡Hoy es día de descanso!"
}