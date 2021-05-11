const sqlInsertUser = {
  text: `INSERT INTO users (login, password) VALUES ($1, $2)
  RETURNING id, login`
}

const sqlUsers = {
  text: `SELECT * FROM users`,
  rowMode: 'array',
}

module.exports = {
  sqlInsertUser,
  sqlUsers
}