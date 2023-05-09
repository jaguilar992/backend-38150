'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonModelSchema extends Schema {
  up () {
    this.create('pokemon', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('type', 80).notNullable()
      table.integer('number').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemon')
  }
}

module.exports = PokemonModelSchema
