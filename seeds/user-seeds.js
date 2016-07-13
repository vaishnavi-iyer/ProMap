
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'vai', skills: 'coding'}),
        knex('users').insert({name: 'a', skills: 'more coding'}),
        knex('users').insert({name: 'b', skills: 'more more coding'})
      ]);
    });
};
