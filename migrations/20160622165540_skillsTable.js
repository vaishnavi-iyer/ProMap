
exports.up = function(knex, Promise) {
  console.log('create skills table')

  return knex.schema.createTableIfNotExists('skills', function(table) {
    table.increments('id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skills').then(function () {
    console.log('skills table was dropped')
  })
};