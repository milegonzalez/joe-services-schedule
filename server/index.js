// const express = require('express');
// const bodyParser = require('body-parser');
// // const ScheduleDB = require('../database/Models/ScheduleDB.js');
// const app = express();
// const port = process.env.PORT || 3000;
// // const knex = require('knex');
// const faker = require('faker');
// //just added these
// // const pg = require('pg');
// const cors = require('cors');



// app.use(cors());
// app.use(express.static(`${__dirname}/../client/dist`));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// // Schedule endpoint
// app.get('/schedule', (req, res) => {
//   res.json({info: 'Node.js, Expres and postgres schedule running'})
// });

// app.post('/schedule', (req, res) => {
//     knex('schedule').insert({
//       vs: " vs ",
//       city: "Boston",
//       team: "Hello",
//       teamlogo: "Hello",
//       week: "23:16:44",
//       date: "28-Oct-2018",
//       opponent: "Hello",
//       opponentlogo: "Hello",
//       result: 7 +  "-"  + 7,
//       winloss: 7 +  "-"  + 6,
//       wl: " L",
//       link: "Hello",
//       feed: "Hello",
//       playerpass: "Hello",
//       playerrush: "Hello",
//       pass: 0,
//       rush: 98,
//       rec: 90
//       // vs: `${faker.name.lastName()}`,
//       // city: `${faker.address.city()}`,
//       // team: `${faker.name.lastName()}`,
//       // teamlogo: `${faker.image.sports()}`,
//       // week:`${faker.date.recent()}`,
//       // date: `${faker.date.recent()}`,
//       // opponent: `${faker.name.lastName()}`,
//       // opponentlogo: `${faker.image.sports()}`,
//       // result: `${faker.name.lastName()}`,
//       // winloss: `${faker.name.lastName()}`,
//       // wl: `${faker.name.lastName()}`,
//       // link: `${faker.internet.url()}`,
//       // feed: `${faker.lorem.words()}`,
//       // playerpass: `${faker.name.lastName()}`,
//       // playerrush: `${faker.name.lastName()}`,
//       // pass: `${faker.random.number()}`,
//       // rush: `${faker.random.number()}`,
//       // rec: `${faker.random.number()}`,
//     })
//     .then(() => {
//       knex.select().from('schedule').orderBy('timestamp').limit(10)
//       .then((data) => {
//         res.send(data);
//       });
//     })
// });


// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/config');



// const MongoClient = require('mongodb', { useNewUrlParser: true }).MongoClient

// MongoClient.connect('mongodb://localhost:27017/schedule', function (err, db) {
//   if (err) throw err

//   db.collection('schedule').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
