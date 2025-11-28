function validarFormatoFecha(cadenaDeFecha) {
    const regexFormatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    return regexFormatoFecha.test(cadenaDeFecha);
}
const fechaValida1 = "25/11/2025";
const fechaValida2 = "01/01/1990";
const fechaInvalida1 = "5/11/2025";
const fechaInvalida2 = "25-11-2025";
const fechaInvalida3 = "25/11/25";
const fechaInvalida4 = "25/11/2025a";

console.log("--- Detectar Formato de Fecha (dd/mm/yyyy) ---");
console.log(`'${fechaValida1}' es válido: ${validarFormatoFecha(fechaValida1)}`);
console.log(`'${fechaValida2}' es válido: ${validarFormatoFecha(fechaValida2)}`);
console.log(`'${fechaInvalida1}' es válido: ${validarFormatoFecha(fechaInvalida1)}`);
console.log(`'${fechaInvalida2}' es válido: ${validarFormatoFecha(fechaInvalida2)}`);
console.log(`'${fechaInvalida3}' es válido: ${validarFormatoFecha(fechaInvalida3)}`);
console.log(`'${fechaInvalida4}' es válido: ${validarFormatoFecha(fechaInvalida4)}`);