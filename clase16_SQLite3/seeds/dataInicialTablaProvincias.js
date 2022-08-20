/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('provincias').del();
  await knex('provincias').insert([
    { nombre: 'Buenos Aires' },
    { nombre: 'Catamarca' },
    { nombre: 'Chaco' },
    { nombre: 'Chubut' },
    { nombre: 'Córdoba' },
    { nombre: 'Corrientes' }
  ]);
};
