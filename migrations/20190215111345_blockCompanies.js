
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', table => {
    table.increments('id').primary()
    table.string('company')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies')
}
