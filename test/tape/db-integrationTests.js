var redtape = require('redtape')
var request = require('supertest')
var app = require('../../app')
var dbConfig = require('../../database/db-config')
var knex = dbConfig.db


var project = {
  id: 1,
  name: 'Personal Project',
  description: 'I am making a project Management App'
}

var test = redtape({
  beforeEach: function(callback) {
    return knex.migrate.rollback()
      .then(function() {
        return knex.migrate.latest();
      })
      .then(function() {
        return knex('projects').insert(project)
      })
      .then(function() {
        callback();
      })
      .catch(function(err) {
        console.log(err);
        callback();
      });
  },

  afterEach: function(callback) {
    return knex.migrate.rollback()
      .then(function() {
        //knex.destroy();
        callback();
      })
      .catch(function(err) {
        console.log(err);
        callback();
      })
  }
});

test('setup', function (t) {
  knex.migrate.rollback()
    .then(function () {
      t.end()
    })
})

//GET projects
test('it gets the projects', function (t) {
  request(app)
    .get('/api/v1/projects')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if(err) throw err;
      t.ok(res.body.length)
      Object.keys(project).forEach(function (key) {
        t.equal(project[key], res.body[0][key], key + ': ' + project[key] + ' is equal')
      })
      t.end()
    })
})

// GET /projects/:id
test('it gets the projects for id specified', function (t) {
  request(app)
    .get('/api/v1/projects/1')
    .expect(200)
    .end(function (err, res) {
      if(err) throw err;
      t.ok(res.body)// cant check for array length as this returns an object
      Object.keys(project).forEach(function (key) {
        t.equal(project[key], res.body[key], key + ': ' + project[key] + ' is equal')
      })
      t.end()
    })
})

// DELETE /api/v1/projects/:id
test('delete the artist on id', function (t) {
  request(app)
  .delete('/api/v1/projects/1')
  .expect(200)
  .end(function (err, res) {
    if(err) throw err;
    request(app)
    .get('/api/v1/projects')
    .expect(200)
    .end(function (err, res) {
      t.equal(res.body.length, 0)
      t.end()
    })
  })
})


// POST /api/vi/projects
var newProject = {
  name: 'Racer Game',
  description: 'Car racing',
  id:2
}

test('post creates an artist', function (t){
  request(app)
    .post('/api/v1/projects')
    .send(newProject)
    .set('Accept', 'application/json')
    // .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res){
      if(err) throw err;
      request(app)
        .get('/api/v1/projects')
        .expect(200)
        .end(function (err, res) {
          t.equal(res.body.length, 2)
          t.deepEqual(newProject,res.body[1], 'objects are equal')
          t.end()
        })
    })
})

var newProject = {
  name: 'Racer Game',
  description: 'Car racing'
}

// PUT /api/v1/projects/:id
test('put updates an artist', function (t){
  request(app)
    .put('/api/v1/projects/1')
    .send(newProject)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res){
      if(err) throw err;
      request(app)
        .get('/api/v1/projects/1')
        .expect(200)
        .end(function (err, res) {
          if(err) throw err;
          t.equal(res.body.name, newProject.name, 'fields are equal')
          t.end()
        })
    })
})