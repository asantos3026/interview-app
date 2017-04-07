import { getEnv } from '../config/config'

const makeKnexConfig = (env) => {
  const connectionString = process.env.DATABASE_URL ||
   `postgres://${process.env.USER}@localhost:5432/interviewdb-${env}`
  return {
    'client': 'postgresql',
    'connection': connectionString,
    'migrations': {
      'directory': `${__dirname}/migrations`,
      'tableName': 'migrations'
    },
    'pool': {
      'max': 10,
      'min': 2
    },
    'seeds': { 'directory': `${__dirname}/build/server/database/seeds/${env}` }
  }
}

const knexConfig = makeKnexConfig(getEnv())
module.exports = knexConfig
