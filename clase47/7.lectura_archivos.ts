import * as conversion from "https://deno.land/std@0.170.0/streams/conversion.ts";
// import * as fs from "https://deno.land/std/fs/read_file_str.ts";


const file = await Deno.open("./hello.txt", {read: true});
await Deno.copy(file, Deno.stdout);


// await conversion.copy(file, Deno.stdout);
file.close();

// // Leer archivos con fs de Deno
// const content = await fs.readFileStr("./hello.txt");
// console.log(content);

const encoder = new TextEncoder();
const data = encoder.encode("Hello Coder, nuevo contenido");
await Deno.writeFile("hello.txt", data);