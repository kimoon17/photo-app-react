const sqlInsertUser = {
  text: `INSERT INTO users (login, password) VALUES ($1, $2)
  RETURNING id, login`
}

const sqlUsers = {
  text: `SELECT * FROM users`,
  rowMode: 'array',
}

const sqlUpdateUserToken = {
  text: `UPDATE users
  SET token='$1', token_created_date='$2'
  WHERE login = '$3'`
}

module.exports = {
  sqlUpdateUserToken,
  sqlInsertUser,
  sqlUsers
}