


const data = (()=>{
    let mensaje;
    return (...men) => 
        (men!=null && men!=undefined)
        ?
            mensaje = men
        : 
            mensaje;
})();
console.log(data('miguel'));
console.log(data(null));
console.log(data(undefined));
console.log(data());





// Funciones Flecha
// function saludar(){
//     return `Hola mundo`;
// }
// console.log(saludar());


// const saludar =()=>{
//     return `Hola mundo`;
// }
// const suma =()=> 1+3;
// const parametros_1 = mensaje => mensaje;
// const condicio = num1 => num1>=3;

// console.log(condicio(3));





// Clausuras 
// const sumarDeUnoAUno = (function(){
//     let data;
//     return function(nombre){
//         if(nombre!=null){
//             data = nombre;
//         }
//         return data;
//         // return (nombre!=null) ?(data = nombre, data) :data;
//     };
// })();

// console.log(sumarDeUnoAUno(`Miguel`));
// console.log(sumarDeUnoAUno(null));
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno(`Andrea`));
// console.log(sumarDeUnoAUno(null));
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno());










// Funciones autoejecutables
// const resultado = (function(num1 , num2){
//     return num1+num2;
// })(2,3);
// if(resultado<=5){
//     console.log("La condicion es correcta");
// }



// let men = `Hola Mundo como estas `;
// (function(mensaje){
//     console.log(`${mensaje}`);
// })(men)







// Callbacks Ejemplo Practico
// const fAfirmativo = function (num) {
//     return `El numero ${num} es el correcto de la condicion`;
// }
// const fError = function (num) {
//     return `El numero ${num} no cumple con la condicion`;
// }
// const fEjecutar = function (callbakA, callbackE) {
//     const num = Math.trunc(Math.random() * 10);
//     return (num >= 4 && num <=8)
//         ?([callbakA(num),true])
//         :([callbackE(num),false]);
    
// }

// const respuesta = fEjecutar(fAfirmativo, fError);
// console.warn(
//         (respuesta[1])
//         ?(console.log(respuesta[0]),`Se ejecuto el callback fAfirmativo`)
//         :(console.error(respuesta[0]),`Se ejecuto el callback fError`)
//     );