import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";
console.log("--- Operaciones Matemáticas Modulares ---");
const resultadoSuma = sumar(10, 5);
console.log(" Suma de 10 + 5: " + resultadoSuma); 
const resultadoResta = restar(10, 5);
console.log("Resta de 10 - 5: " + resultadoResta); 
const resultadoMultiplicacion = multiplicar(10, 5);
console.log("Multiplicación de 10 * 5: " +resultadoMultiplicacion);
try {
    const resultadoDivision = dividir(10, 5);
    console.log("División de 10 / 5: " + resultadoDivision); 
    const resultadoError = dividir(10, 0);
    console.log("División de 10 / 0: " + resultadoError); 
} catch (error) {
    console.error("Error en división: " + error.message);
}