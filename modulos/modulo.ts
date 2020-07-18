import { areaCircunferencia as circ } from "./circunferencia";
import rect from "./retangulo";

console.log("Módulo carregado");

console.log(circ(2));
console.log(rect(2, 20));

const { digaOi } = require("./novo");

console.log(digaOi("Ana"))
