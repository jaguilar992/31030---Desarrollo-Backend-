'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemon', (table) => {
      // table.increments()
      table.timestamps()
      table.integer("id").notNullable().unique();
      table.string("name", 80).notNullable().unique()
      table.string("type", 80).notNullable()
    })
  }

  down () {
    this.drop('pokemon')
  }
}

module.exports = PokemonSchema
