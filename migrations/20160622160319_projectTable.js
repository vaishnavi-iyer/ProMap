
exports.up = function(knex, Promise) {
  console.log('create projects table')

  return knex.schema.createTableIfNotExists('projects', function(table) {
    console.log('create table');
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects').then(function () {
    console.log('projects table was dropped')
  })
};

