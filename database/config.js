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
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Connected!')
});
let faker = require('faker');


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

let generateTeamFunc = function (number) {
  let teams = [
   "Arizona Cardinals",
   "Atlanta Falcons ",
   "Baltimore Ravens",
   "Buffalo Bills",
   "Carolina Panthers",
   "Chicago Bears",
   "Cincinnati Bengals",
   "Cleveland Browns",
   "Dallas Cowboys",
   "Denver Broncos",
   "Detroit Lions",
   "Green Bay Packers",
   "Houston Texans",
   "Indianapolis Colts",
   "Jacksonville Jaguars",
   "Kansas City Chiefs",
   "Los Angeles Chargers",
   "Los Angeles Rams",
   "Miami Dolphins",
   "Minnesota Vikings",
   "New England Patriots",
   "New Orleans Saints",
   "New York Giants",
   "New York Jets",
   "Oakland Raiders",
   "Philadelphia Eagles",
   "Pittsburgh Steelers",
   "San Francisco 49ers",
   "Seattle Seahawks",
   "Tampa Bay Buccaneers",
   "Tennessee Titans",
   "Washington Redskins"]

   return teams[number]
 }

 let generateRandomNumber = function (num) {
   return Math.floor(Math.random() * num);
 }

const recordGeneratingFunc = function (numberOfRecords) {
  let results = [];
  for (let i = 0; i < numberOfRecords; i++) {
    let record = {
      vs: " vs ",
      city: faker.address.city(),
      team: generateTeamFunc(generateRandomNumber(32)),
      teamlogo: faker.image.sports(),
      week: "23:16:44",
      date: "28-Oct-2018",
      opponent: generateTeamFunc(generateRandomNumber(32)),
      opponentlogo: faker.image.sports(),
      result: generateRandomNumber(10) + "-" + generateRandomNumber(10),
      winloss: generateRandomNumber(10) + "-" + generateRandomNumber(10),
      wl: " L",
      link: faker.internet.url(),
      feed: faker.lorem.words(),
      playerpass: faker.name.lastName(),
      playerrush: faker.name.lastName(),
      pass: generateRandomNumber(200),
      rush: generateRandomNumber(200),
      rec: generateRandomNumber(200),
    }
    results.push(record);
  }
  return results;
}

let insert10000Records = function (numberOfTimes) {
  for (let i = 0; i < numberOfTimes; i++){
    Schedule.collection.insert(recordGeneratingFunc(10000));
  }
  console.log('done!');
}

// insert10000Records(50)

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(insert10000Records(20));
    }, 2000);
  });
}

async function asyncCall(n) {
  console.log('starting inserting records ', new Date());
  for(var i = 0; i < n; i++){
  var result = await resolveAfter2Seconds();
  }
  console.log('10M records inserted ' , new Date());
  // expected output: 'resolved'
}

console.log(asyncCall(25));
