const MODO = process.env.MODO || "dev-default";
const PUERTO = process.env.PUERTO || 8081;
const DEBUG = process.env.DEBUG || true;


console.log ({
  modo: MODO,
  puerto: PUERTO,
  debug: DEBUG
})