const { faker } = require('@faker-js/faker');

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

module.exports = function(n)  {
  const usuarios = [];
  for(let i=0; i<n; i++) {
    const _usuario = {
      name: faker.name.firstName(),
      age: randomInt(18,45)  
    }
    usuarios.push(_usuario)
  }
  return usuarios;
}