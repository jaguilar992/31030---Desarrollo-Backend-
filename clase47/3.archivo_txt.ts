const encoder = new TextEncoder();
const data = encoder.encode("Hello World");
await Deno.writeFile("hello.txt", data);



// Dar permisos de escritura a Deno
// deno run --allow-write 3.archivo_txt.ts