const textoOriginal = "Hola. Cómo estás? Bien! Qué tal?";
const Oraciones = /[^.?!]+[?!.]*/g;

function procesarTexto() { 
    const oraciones = textoOriginal
        .split(/[.?!]/) 
        .filter(sentence => sentence.trim() !== '') 
        .map(sentence => sentence.trim()); 
    console.log("--- Dividir Texto en Oraciones ---");
    console.log("Texto Original: \"" + textoOriginal + "\"");
    console.log(oraciones);
}