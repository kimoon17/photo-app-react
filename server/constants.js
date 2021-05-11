require('dotenv').config()

module.exports = constants = {
  pgSettings: {
    user: 'postgres',
    host: 'localhost',
    database: 'crud',
    password: 'blablabla5',
    port: 5432
  },
  frontOrigin: 'http://localhost:3006',
  expressPort: 8000,
}