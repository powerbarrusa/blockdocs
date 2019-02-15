
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blockCompanies').del()
    .then(function () {
      // Inserts seed entries
      return knex('blockCompanies').insert([
        {id: 1, company: 'Morgan Stanley'},
        {id: 2, company: 'Amazon'},
        {id: 3, company: 'Banco Santander'}
      ]);
    });
};
