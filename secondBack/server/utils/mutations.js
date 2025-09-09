const FUNCTIONS = {
    registerUser: () => 'SELECT * FROM user_register($1::TEXT, $2::TEXT, $3::TEXT);',
    createCategory: () => 'SELECT * FROM category_create($1, $2::TEXT);',
    createTransactionBasic: () => `SELECT add_transaction($1, $2, $3) AS id;`
}

module.exports = FUNCTIONS;