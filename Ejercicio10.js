const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log("--- Contraseña ---");

console.log("1. 'MiClave123!': " + regexContraseña.test("MiClave123!")); 
console.log("2. 'clave123': " + regexContraseña.test("clave123")); 
console.log("3. 'MICLAVE123': " + regexContraseña.test("MICLAVE123")); 
console.log("4. 'MiClave!': " + regexContraseña.test("MiClave!")); 
console.log("5. 'Corta1': " + regexContraseña.test("Corta1")); 