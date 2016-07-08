
exports.up = function(knex, Promise) {
  console.log('create tasks table')

  return knex.schema.createTableIfNotExists('tasks', function(table) {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('skills')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tasks').then(function () {
    console.log('tasks table was dropped')
  })
};