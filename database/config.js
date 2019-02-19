const mongoose = require('mongoose');
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
};

mongoose.connect('mongodb://localhost/schedule', option)
  .then(function(){
    console.log('connected successfully')
  }, function (err) {
    console.log('error - connection ended')
  });
let db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Connected!')
});

let scheduleSchema = new mongoose.Schema({
  vs: String,
  city: String,
  team: String,
  teamlogo: String,
  week: String,
  date: String,
  opponent: String,
  opponentlogo: String,
  result: String,
  winloss: String,
  wl: String,
  link: String,
  feed: String,
  playerpass: String,
  playerrush: String,
  stats: {
    pass: Number,
    rush: Number,
    rec: Number,
  }
})

let Schedule = mongoose.model('schedule', scheduleSchema);

module.exports = db;
module.exports = Schedule;