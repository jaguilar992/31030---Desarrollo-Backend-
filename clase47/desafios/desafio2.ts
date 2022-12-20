import {
	Application,
	Router,
	Context,
	helpers,
} from "https://deno.land/x/oak@v10.6.0/mod.ts";

// KOA
// OAK

const router = new Router();

router.get("/:frase", (ctx: Context) => {
  const { frase } = helpers.getQuery(ctx, {mergeParams: true});
  console.log(frase);
  const reverse = frase.split(" ").reverse().join(" ");
  ctx.response.body = {
    reverse
  };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });

// http://localhost:8080/hola%20mundo%20bienvenidos%20a%20oak