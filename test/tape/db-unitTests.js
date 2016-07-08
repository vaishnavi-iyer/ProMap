var redtape = require('redtape')
var App = require('../../app')
var dbConfig = require('../../database/db-config')
var knex = dbConfig.db //knex here is the module knex

var db = require('../../database/db-utils')(knex)

var project = {
  name: 'Personal Project',
  description: 'I am making a project Management App',
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest()
      .then(function () {
        return knex('projects').insert(project)
      })
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback()
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback()
    .then(function () {
      t.end()
    })
})


// db.getAll
test('it gets all the rows from a table', function (t) {
  db.getAll('projects', function (err, resp) {
    Object.keys(project).forEach(function (key) {
      t.equal(project[key], resp[0][key], key + ': ' + project[key] + ' is equal')
    })
    t.end()
  })
})


test('it gets a particular project', function (t) {
  db.findOne('projects', { id: 1 }, function (err, resp) {
    t.equal(resp.name, project.name, 'it got the project')
    t.end()
  })
})

var newProject = {
  name: 'Racer Game',
  description: 'Car racing'
}

test('it adds a new project to the database', function (t) {
  db.add('projects', newProject, function (err, resp) {
    db.findOne('projects', { id: 2 }, function (err, resp) {
      Object.keys(newProject).forEach(function (key) {
        t.equal(newProject[key], resp[key], key + ': ' + newProject[key] + ' is equal')
      })
      t.end()
    })
  })
})

test('it deletes the project from the database', function (t) {
  db.delete('projects', { id: 1 }, function (err, resp) {
    db.getAll('projects', function (err, resp) {
      t.equal(resp.length, 0, 'project has been deleted')
      t.end()
    })
  })
})

var updateInfo = { description: 'I am only making a basic version' }
test('it updates the artist', function (t) {
  db.update('projects', { id: 1 }, updateInfo, function (err, resp) {
    db.findOne('projects', { id: 1}, function (err, resp) {
      t.equal(resp.descirption, updateInfo.descirption, 'Updated the description')
      t.end()
    })
  })
})
