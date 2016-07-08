module.exports = function (knex) {

  return {
    getAll: function (table, callback) {
      knex.select().from(table)
        .then(function (resp) {
          callback(null, resp)
        })
        .catch(function(err){
          console.error(err)
          callback(err, null);
        })
    },

    findOne: function (table, params, callback) {
      knex(table).where(params)
        .then(function (resp) {
          callback(null, resp[0])
        })
        .catch(function(err){
          console.error(err)  
          callback(err, null);
        })
    },

    add: function (table, params, callback) {
        knex(table).insert(params)
          .then(function (resp) {
            callback(null, resp[0])
          })
          .catch(function(err){
            console.error(err)
            callback(err, null);
          })
    },

    delete: function (table, params, callback) {
      knex(table).where(params).del()
        .then(function (resp) {
          callback(null, resp[0])
        })
        .catch(function(err){
          console.error(err)
          callback(err, resp);
        })
    },                                                 

    update: function (table, searchParams, updateInfo, callback) {
      knex(table).where(searchParams).update(updateInfo)
        .then(function (resp) {
          callback(null, resp)
        })
        .catch(function(err){
          console.error(err)
          callback(err, resp);
        })
    }
  }
}