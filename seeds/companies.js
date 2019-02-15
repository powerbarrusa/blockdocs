
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, company: 'Morgan Stanley'},
        {id: 2, company: 'Amazon'},
        {id: 3, company: 'Banco Santander'}
      ])
    })
}
