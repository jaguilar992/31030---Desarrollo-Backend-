import { serve } from "https://deno.land/std@0.144.0/http/mod.ts";

const PORT = 8080;

function handler (request: Request) {
  const body = "Hello World"
  return new Response(body, {status: 200});
}

const server = await serve(handler, {port: PORT});

// deno run --allow-net 8.servidor_http.ts