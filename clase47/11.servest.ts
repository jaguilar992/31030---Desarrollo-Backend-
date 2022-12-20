import { createApp } from "https://deno.land/x/servest@1.3.4/mod.ts";

const app = createApp();
app.handle("/", async(req: any) => {
  await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/plain"
      }),
      body: "Hola mundo desde Servest usando deno"
    }
  )
});

app.listen({port: 8080});