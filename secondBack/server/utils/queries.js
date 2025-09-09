const FUNCTIONS = {
    getUsers: () => { return 'SELECT * FROM get_all_users()' },
    loginUser: () => 'SELECT * FROM user_login($1::TEXT, $2::TEXT);',
    getUserTransactions: () => `SELECT * FROM get_user_transactions($1);`
}

module.exports = FUNCTIONS;