const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schedule');
let db = mongoose.connection;
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


// let record = new Schedule ({
//   'vs': ' vs ',
//   'city': 'South Christopher',
//   'team': 'Seattle Seahawks',
//   'teamlogo': 'http://lorempixel.com/640/480/sports',
//   'week': '23:16:44',
//   'date': '28-Oct-2018',
//   'opponent': 'Los Angeles Rams',
//   'opponentlogo': 'http://lorempixel.com/640/480/sports',
//   'result': '8-4',
//   'winloss': '1-6',
//   'wl': ' L',
//   'link': 'https://dashawn.net',
//   'feed': 'maxime earum laboriosam',
//   'playerpass': 'Funk',
//   'playerrush': 'Hermann',
//   'stats': {
//     'pass': 42,
//     'rush': 63,
//     'rec': 171
//   }
// })


// record.save(function (err, record) {
//   if (err) return console.log('there has been an error')
//   console.log('record inserted', record);
// })

let recordGeneratingFunc = function (numberOfRecords) {

}

let docs = [{
  'vs': ' vs ',
  'city': 'South Christopher',
  'team': 'Seattle Seahawks',
  'teamlogo': 'http://lorempixel.com/640/480/sports',
  'week': '23:16:44',
  'date': '28-Oct-2018',
  'opponent': 'Los Angeles Rams',
  'opponentlogo': 'http://lorempixel.com/640/480/sports',
  'result': '8-4',
  'winloss': '1-6',
  'wl': ' L',
  'link': 'https://dashawn.net',
  'feed': 'maxime earum laboriosam',
  'playerpass': 'Funk',
  'playerrush': 'Hermann',
  'stats': {
    'pass': 42,
    'rush': 63,
    'rec': 171
  }}, {
    'vs': ' vs ',
    'city': 'South ',
    'team': '',
    'teamlogo': 'http://lompixel.com/640/480/sports',
    'week': '23:16:',
    'date': '28-Oct-',
    'opponent': 'Los ',
    'opponentlogo': 'http://lorempixel.com/640/480/sports',
    'result': '9-4',
    'winloss': '1-06',
    'wl': ' R',
    'link': 'http://dashawn.net',
    'feed': 'mme earum laboriosam',
    'playerpass': 'gal',
    'playerrush': 'rmann',
    'stats': {
      'pass': 42,
      'rush': 63,
      'rec': 171
  }}]


Schedule.collection.insert(docs);



//notice the new kitten =- need to do something lik ethat