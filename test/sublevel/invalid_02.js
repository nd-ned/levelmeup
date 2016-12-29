var level = require('level')
module.exports = function (databaseDir, callback) {
  var db = require('level-sublevel')(level(databaseDir))
  var robots = db.sublevel('robots')
  var dinosaurs = db.sublevel('dinosaurs')

  ;[robots, dinosaurs].map(function (lev, i) {
    lev.put('slogan', 1 === i ? 'rawr' : 'beep boop');
  })
  setImmediate(callback)
}
