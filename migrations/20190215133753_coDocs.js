
exports.up = function(knex, Promise) {
  return knex.schema.createTable('codocs', table => {
    table.increments('id').primary()
    table.integer('docs_id')
    table.integer('companies_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('codocs')
}
