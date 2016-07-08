
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({id: 1, name: 'friday project', description: 'setup basic start module'}),
        knex('projects').insert({id: 2, name: 'personal project ', description: 'promap'}),
        knex('projects').insert({id: 3, name: 'lightening talk', description: 'prepare for wednesday'})
      ])
    });
};
