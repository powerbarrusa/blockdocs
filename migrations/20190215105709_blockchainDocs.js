
exports.up = function(knex, Promise) {
  return knex.schema.createTable('docs', table => {
    table.increments('id').primary()
    table.string('website')
    table.string('name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('docs')
}
