import * as colors from "https://deno.land/std@0.170.0/fmt/colors.ts";

const textoFormateado = colors.bgBlue(
  colors.red("Hola" + " " + colors.bold("Mundo"))
);

console.log(textoFormateado);