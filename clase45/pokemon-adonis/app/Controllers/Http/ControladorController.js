'use strict'

class ControladorController {
  async index({ view, request }) {
    const palabra = request.qs.palabra;
    const palabraInvertida = palabra.split("").reverse().join("");
    return await view.render("desafio1", { 
      palabra: palabra,
      palabraInvertida: palabraInvertida
    });
  }
}

module.exports = ControladorController
