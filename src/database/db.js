import Knex from 'knex'
import knexConfig from './knexfile'

const knex = new Knex(knexConfig)
export default knex
