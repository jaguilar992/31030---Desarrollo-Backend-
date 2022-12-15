const Koa = require('koa');
const app = new Koa();
const { koaBody } = require('koa-body');

const { connectMongo } = require('./database');
connectMongo();

const pokemonRouter = require('./routes/pokemon');
// app.use( async ctx => {
//   // ctx.body = 'Hello World';
//   ctx.request;
//   ctx.response;
// });

app.use(koaBody());
app.use(pokemonRouter.routes());

app.listen(8000);