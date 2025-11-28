const URLSegura = /https:\/\/[A-Za-z0-9\-\.]+\.[A-Za-z]{2,}(\/\S*)?/g;

const texto = "Visita mi web segura https://www.ejemplo.com o la "
"insegura http://insegura.net, También prueba https://api.prueba-123.org/datos.";

console.log("--- URLs Seguras (https://) ---");
const URLSencontradas = texto.match(URLSegura);
console.log(URLSencontradas);