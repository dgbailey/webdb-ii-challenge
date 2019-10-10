const db = require('./dbConfig');

function get(limit){
    return db('accounts').limit(limit).orderBy('user_name');
}

module.exports = {get};