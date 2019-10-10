
exports.up = function(knex,Promise) {
    return knex.schema.createTable('accounts', tbl => {
        //pk that increments
        tbl.increments();
        tbl.text('user_name',128).unique().notNullable();
        tbl.text('hashed_password').notNullable();
        //date created
    });
  
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTableIfExists('user_accounts');
};


//if latest migration causes issues, 
//1) first knex migrate:rollback
//2) then we can update our edit and rerun our migration file
//3) Don't user rollback to change an old migration file    
//changes and rollbacks
