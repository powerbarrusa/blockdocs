
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('docs').del()
    .then(function () {
      // Inserts seed entries
      return knex('docs').insert([
        {id: 1, website: "https://bitcoin.org/en/developer-documentation", name: "Bitcoin"},
        {id: 2, website: "http://www.ethdocs.org/en/latest", name: "Ethereum"},
        {id: 3, website: "https://www.stellar.org/developers/guides", name: "Stellar"},
        {id: 4, website: "https://developers.ripple.com/docs.html", name: "Ripple"}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('docs_id_seq', (SELECT MAX(id) FROM docs))"
      )
    })
  }

