
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: "Barr", last_name: "Covrigaru", email: "barr@covrigaru.com"},
        {id: 2, first_name: "Ryan", last_name: "Leach", email: "ryan.leach@mac.com"}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
      )
    })
  }

