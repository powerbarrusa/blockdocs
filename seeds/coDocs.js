
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('codocs').del()
    .then(function () {
      // Inserts seed entries
      return knex('codocs').insert([
        {id: 1, docs_id: 1, companies_id: 1},
        {id: 2, docs_id: 2, companies_id: 2},
        {id: 3, docs_id: 3, companies_id: 3}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('codocs_id_seq', (SELECT MAX(id) FROM codocs))"
      )
    })
  }

