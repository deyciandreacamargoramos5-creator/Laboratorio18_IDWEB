const QuitarHtml = /<[^>]+>/g;
const html = "<h1>Hola</h1> <p>Esto es un <strong>texto</strong>.</p>";
const textoLimpio = html.replace(QuitarHtml, "");

console.log("--- Quitar Etiquetas HTML ---");
console.log("Original: \"" + html + "\"");
console.log("Limpio: \"" + textoLimpio + "\"");