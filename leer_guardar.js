const fs = require("fs");
const path = require("path");

const pathTexto = path.join(__dirname, './texto.txt');

const texto = "Saludos, este es un mensaje de prueba."
const mensaje = "Este es un nuevo mensaje escrito."

const escribir = fs.writeFileSync(pathTexto, texto + mensaje, "utf-8");

const leer = fs.readFileSync(pathTexto, "utf-8");

console.log(leer);