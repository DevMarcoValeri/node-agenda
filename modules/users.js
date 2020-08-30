const db = require('../util/database');

module.exports = class Users {

    static valid_user(email, password) {

        if (email === 'info@marcovaleri.net' && password === 'Silver09') {
            return true;
        } else {
            return false;
        }
    }

}