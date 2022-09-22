const MAX_IDLE_TIME = 10; // segundos

function idleMiddleware(req, res, next) {
  const diff = Date.now() - req.session.ultimaActualizacion; // Diferencia entre la ultima actualizacion y el momento actual
  console.log(diff);
  if (req.session.name && diff > MAX_IDLE_TIME * 1000) {
    req.session.destroy();
    res.redirect('/login');
    return;
  }
  next();
}

function refreshSessionTimeMiddleware (req, res, next) {
  if (!req.session.ultimaActualizacion && req.session.name) {
    req.session.ultimaActualizacion = Date.now(); // Timestamp de la ultima actualizacion
    next();
    return;
  }

  const diff = Date.now() - req.session.ultimaActualizacion;
  if (req.session.name && diff < MAX_IDLE_TIME * 1000) {
    req.session.ultimaActualizacion = Date.now();
    next();
    return;
  }
  next();
}

module.exports = {
  idleMiddleware,
  refreshSessionTimeMiddleware
}