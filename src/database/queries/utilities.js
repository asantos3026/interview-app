import knex from '../db.js'

const utilities = {
  'create': (table, attributes) => knex.
      table(table).
      insert(attributes).
      returning('*'),

  'delete': (table, column, data) => knex.
      table(table).
      where(column, data).
      del(),

  'findAll': () => knex.
      table(table).
      returning('*'),

  'findAllWhere': (table, column, data) => knex.
      table(table).
      where(column, data).
      returning('*'),

  'findAllWhereRaw': (table, rawSql) => knex.
      table(table).
      where(knex.raw(rawSql)).
      returning('*'),

  'update': (table, column, data, attributes) => knex.
      table(table).
      where(column, data).
      update(attributes).
      returning('*')

}
module.exports = utilities
